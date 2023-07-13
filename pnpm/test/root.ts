import fs from 'fs'
import path from 'path'
import PATH_NAME from 'path-name'
import { LAYOUT_VERSION } from '@pnpm/constants'
import { tempDir } from '@pnpm/prepare'
import { execPnpmSync } from './utils'

test('flightjs root', async () => {
  tempDir()
  fs.writeFileSync('package.json', '{}', 'utf8')

  const result = execPnpmSync(['root'])

  expect(result.status).toBe(0)

  expect(result.stdout.toString()).toBe(path.resolve('node_modules') + '\n')
})

test('flightjs root -g', async () => {
  tempDir()

  const global = path.resolve('global')
  const flightjsHome = path.join(global, 'flightjs')
  fs.mkdirSync(global)

  const env = { [PATH_NAME]: flightjsHome, PNPM_HOME: flightjsHome, XDG_DATA_HOME: global }

  const result = execPnpmSync(['root', '-g'], { env })

  expect(result.status).toBe(0)
  expect(result.stdout.toString()).toBe(path.join(global, `flightjs/global/${LAYOUT_VERSION}/node_modules`) + '\n')
})
