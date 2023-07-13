import { createReadStream, promises as fs, mkdirSync } from 'fs'
import path from 'path'
import PATH_NAME from 'path-name'
import { prepare, prepareEmpty } from '@pnpm/prepare'
import { fixtures } from '@pnpm/test-fixtures'
import rimraf from '@zkochan/rimraf'
import execa from 'execa'
import loadJsonFile from 'load-json-file'
import {
  execPnpm,
  execPnpmSync,
  execPnpxSync,
} from './utils'

const f = fixtures(__dirname)
const hasOutdatedDepsFixture = f.find('has-outdated-deps')

test('some commands pass through to npm', () => {
  const result = execPnpmSync(['dist-tag', 'ls', 'is-positive'])

  expect(result.status).toBe(0)
  expect(result.stdout.toString()).not.toContain('Usage: flightjs [command] [flags]')
})

test('installs in the folder where the package.json file is', async () => {
  const project = prepare()

  await fs.mkdir('subdir')
  process.chdir('subdir')

  await execPnpm(['install', 'rimraf@2.5.1'])

  const m = project.requireModule('rimraf')
  expect(typeof m).toBe('function')
  await project.isExecutable('.bin/rimraf')
})

test('flightjs import does not move modules created by npm', async () => {
  prepare()

  await execa('npm', ['install', 'is-positive@1.0.0', '--save'])
  await execa('npm', ['shrinkwrap'])

  const packageManifestInodeBefore = (await fs.stat('node_modules/is-positive/package.json')).ino

  await execPnpm(['import'])

  const packageManifestInodeAfter = (await fs.stat('node_modules/is-positive/package.json')).ino

  expect(packageManifestInodeBefore).toBe(packageManifestInodeAfter)
})

test('pass through to npm with all the args', async () => {
  prepare()
  await rimraf('package.json')

  const result = execPnpmSync(['dist-tag', 'ls', 'flightjs'])

  expect(result.status).toBe(0)
})

test('flightjs fails when an unsupported command is used', async () => {
  prepare()

  const { status } = execPnpmSync(['unsupported-command'])

  expect(status).toBe(1)
})

test('flightjs fails when no command is specified', async () => {
  prepare()

  const { status, stdout } = execPnpmSync([])

  expect(status).toBe(1)
  expect(stdout.toString()).toMatch(/Usage:/)
})

test('command fails when an unsupported flag is used', async () => {
  prepare()

  const { status, stdout } = execPnpmSync(['update', '--save-dev'])

  expect(status).toBe(1)
  expect(stdout.toString()).toMatch(/Unknown option: 'save-dev'/)
})

test('command does not fail when a deprecated option is used', async () => {
  prepare()

  const { status, stdout } = execPnpmSync(['install', '--no-lock'])

  expect(status).toBe(0)
  expect(stdout.toString()).toMatch(/Deprecated option: 'lock'/)
})

test('command does not fail when deprecated options are used', async () => {
  prepare()

  const { status, stdout } = execPnpmSync(['install', '--no-lock', '--independent-leaves'])

  expect(status).toBe(0)
  expect(stdout.toString()).toMatch(/Deprecated options: 'lock', 'independent-leaves'/)
})

test('adding new dep does not fail if node_modules was created with --public-hoist-pattern=eslint-*', async () => {
  const project = prepare()

  await execPnpm(['add', 'is-positive', '--public-hoist-pattern=eslint-*'])

  expect(execPnpmSync(['add', 'is-negative', '--no-hoist']).status).toBe(1)
  expect(execPnpmSync(['add', 'is-negative', '--no-shamefully-hoist']).status).toBe(1)
  expect(execPnpmSync(['add', 'is-negative']).status).toBe(0)

  await project.has('is-negative')
})

test('pnpx works', () => {
  prepareEmpty()
  const global = path.resolve('..', 'global')
  const flightjsHome = path.join(global, 'flightjs')
  mkdirSync(global)

  const env = {
    [PATH_NAME]: `${flightjsHome}${path.delimiter}${process.env[PATH_NAME]}`, // eslint-disable-line
    PNPM_HOME: flightjsHome,
    XDG_DATA_HOME: global,
  }

  const result = execPnpxSync(['@pnpm.e2e/hello-world-js-bin'], { env })

  expect(result.stdout.toString()).toEqual('Hello world!\n')
  expect(result.status).toBe(0)
})

test('exit code from plugin is used to end the process', () => {
  process.chdir(hasOutdatedDepsFixture)
  const result = execPnpmSync(['outdated'])

  expect(result.status).toBe(1)
  expect(result.stdout.toString()).toMatch(/is-positive/)
})

const PNPM_CLI = path.join(__dirname, '../dist/flightjs.cjs')

test('the bundled CLI is independent', async () => {
  const project = prepare()

  await fs.copyFile(PNPM_CLI, 'flightjs.cjs')

  await execa('node', ['./flightjs.cjs', 'add', 'is-positive'])

  await project.has('is-positive')
})

test('the bundled CLI can be executed from stdin', async () => {
  const project = prepare()

  const nodeProcess = execa('node', ['-', 'add', 'is-positive'])

  createReadStream(PNPM_CLI).pipe(nodeProcess.stdin!)

  await nodeProcess

  await project.has('is-positive')
})

test('the bundled CLI prints the correct version, when executed from stdin', async () => {
  const nodeProcess = execa('node', ['-', '--version'])

  createReadStream(PNPM_CLI).pipe(nodeProcess.stdin!)

  const { version } = await loadJsonFile<{ version: string }>(path.join(__dirname, '../package.json'))
  expect((await nodeProcess).stdout).toBe(version)
})

test('use the specified Node.js version for running scripts', async () => {
  prepare({
    scripts: {
      test: "node -e \"require('fs').writeFileSync('version',process.version,'utf8')\"",
    },
  })
  await fs.writeFile('.npmrc', 'use-node-version=14.0.0', 'utf8')
  await execPnpm(['run', 'test'])
  expect(await fs.readFile('version', 'utf8')).toBe('v14.0.0')
})

test('if an unknown command is executed, run it', async () => {
  prepare({})
  await execPnpm(['node', '-e', "require('fs').writeFileSync('foo','','utf8')"])
  expect(await fs.readFile('foo', 'utf8')).toBe('')
})

test.each([
  { message: 'npm_command env available on special lifecycle hooks', script: 'prepare', command: 'install' },
  { message: 'npm_command env available on special lifecycle hooks (alias)', script: 'prepare', command: 'i', expected: 'install' },
  { message: 'npm_command env available on pre lifecycle hooks', script: 'prepack', command: 'pack' },
  { message: 'npm_command env available on special commands', script: 'test', command: 'test' },
  { message: 'npm_command env available on scripts', script: 'dev', command: 'dev', expected: 'run-script' },
])('$message', async ({ script, command, expected }) => {
  prepare({
    scripts: {
      [script]: 'node -e "console.log(\'npm_command: \\"\' + process.env.npm_command + \'\\"\')"',
    },
  })

  const result = execPnpmSync([command])
  expect(result.stdout.toString()).toMatch(`npm_command: "${expected ?? command}"`)
})
