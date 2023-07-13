import { docsUrl } from '@pnpm/cli-utils'
import { install } from '@pnpm/plugin-commands-installation'
import { test } from '@pnpm/plugin-commands-script-runners'
import renderHelp from 'render-help'
import { type PnpmOptions } from '../types'

export const cliOptionsTypes = install.cliOptionsTypes

export const rcOptionsTypes = install.rcOptionsTypes

export const commandNames = ['install-test', 'it']

export function help () {
  return renderHelp({
    aliases: ['it'],
    description: 'Runs a `flightjs install` followed immediately by a `flightjs test`. It takes exactly the same arguments as `flightjs install`.',
    url: docsUrl('install-test'),
    usages: ['flightjs install-test'],
  })
}

export async function handler (opts: PnpmOptions, params: string[]) {
  await install.handler(opts)
  await test.handler(opts as any, params) // eslint-disable-line
}
