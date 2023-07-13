[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct.svg)](https://stand-with-ukraine.pp.ua)

[简体中文](https://flightjs.io/zh/) |
[日本語](https://flightjs.io/ja/) |
[한국어](https://flightjs.io/ko/) |
[Italiano](https://flightjs.io/it/) |
[Português Brasileiro](https://flightjs.io/pt/)

![](https://i.imgur.com/qlW1eEG.png)

Fast, disk space efficient package manager:

* **Fast.** Up to 2x faster than the alternatives (see [benchmark](#benchmark)).
* **Efficient.** Files inside `node_modules` are linked from a single content-addressable storage.
* **[Great for monorepos](https://flightjs.io/workspaces).**
* **Strict.** A package can access only dependencies that are specified in its `package.json`.
* **Deterministic.** Has a lockfile called `flightjs-lock.yaml`.
* **Works as a Node.js version manager.** See [flightjs env use](https://flightjs.io/cli/env).
* **Works everywhere.** Supports Windows, Linux, and macOS.
* **Battle-tested.** Used in production by teams of [all sizes](https://flightjs.io/users) since 2016.
* [See the full feature comparison with npm and Yarn](https://flightjs.io/feature-comparison).

To quote the [Rush](https://rushjs.io/) team:

> Microsoft uses flightjs in Rush repos with hundreds of projects and hundreds of PRs per day, and we’ve found it to be very fast and reliable.

[![npm version](https://img.shields.io/npm/v/flightjs.svg)](https://www.npmjs.com/package/flightjs)
[![Join the chat at Discord](https://img.shields.io/discord/731599538665553971.svg)](https://r.flightjs.io/chat)
[![OpenCollective](https://opencollective.com/flightjs/backers/badge.svg)](#backers)
[![OpenCollective](https://opencollective.com/flightjs/sponsors/badge.svg)](#sponsors)
[![Twitter Follow](https://img.shields.io/twitter/follow/flightjsjs.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=flightjsjs&region=follow_link)

## Gold Sponsors

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://novu.co/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <picture>
            <source media="(prefers-color-scheme: light)" srcset="https://flightjs.io/img/users/novu.svg" />
            <source media="(prefers-color-scheme: dark)" srcset="https://flightjs.io/img/users/novu_light.svg" />
            <img src="https://flightjs.io/img/users/novu.svg" width="180" />
          </picture>
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://prisma.io/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <picture>
            <source media="(prefers-color-scheme: light)" srcset="https://flightjs.io/img/users/prisma.svg" />
            <source media="(prefers-color-scheme: dark)" srcset="https://flightjs.io/img/users/prisma_light.svg" />
            <img src="https://flightjs.io/img/users/prisma.svg" width="180" />
          </picture>
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://www.flightcontrol.dev/?ref=flightjs" target="_blank"><img src="https://flightjs.io/img/users/flightcontrol.svg" width="240"></a>
      </td>
    </tr>
  </tbody>
</table>

## Silver Sponsors

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <a href="https://leniolabs.com/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <img src="https://flightjs.io/img/users/leniolabs.jpg" width="80">
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://vercel.com/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <picture>
            <source media="(prefers-color-scheme: light)" srcset="https://flightjs.io/img/users/vercel.svg" />
            <source media="(prefers-color-scheme: dark)" srcset="https://flightjs.io/img/users/vercel_light.svg" />
            <img src="https://flightjs.io/img/users/vercel.svg" width="180" />
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://depot.dev/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <picture>
            <source media="(prefers-color-scheme: light)" srcset="https://flightjs.io/img/users/depot.svg" />
            <source media="(prefers-color-scheme: dark)" srcset="https://flightjs.io/img/users/depot_light.svg" />
            <img src="https://flightjs.io/img/users/depot.svg" width="200" />
          </picture>
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://moonrepo.dev/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <picture>
            <source media="(prefers-color-scheme: light)" srcset="https://flightjs.io/img/users/moonrepo.svg" />
            <source media="(prefers-color-scheme: dark)" srcset="https://flightjs.io/img/users/moonrepo_light.svg" />
            <img src="https://flightjs.io/img/users/moonrepo.svg" width="200" />
          </picture>
        </a>
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle">
        <a href="https://www.thinkmill.com.au/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <picture>
            <source media="(prefers-color-scheme: light)" srcset="https://flightjs.io/img/users/thinkmill.svg" />
            <source media="(prefers-color-scheme: dark)" srcset="https://flightjs.io/img/users/thinkmill_light.svg" />
            <img src="https://flightjs.io/img/users/thinkmill.svg" width="200" />
          </picture>
        </a>
      </td>
      <td align="center" valign="middle">
        <a href="https://devowl.io/?utm_source=flightjs&utm_medium=readme" target="_blank">
          <picture>
            <source media="(prefers-color-scheme: light)" srcset="https://flightjs.io/img/users/devowlio.svg" />
            <source media="(prefers-color-scheme: dark)" srcset="https://flightjs.io/img/users/devowlio.svg" />
            <img src="https://flightjs.io/img/users/devowlio.svg" width="200" />
          </picture>
        </a>
      </td>
    </tr>
  </tbody>
</table>

Support this project by [becoming a sponsor](https://opencollective.com/flightjs#sponsor).

## Background

flightjs uses a content-addressable filesystem to store all files from all module directories on a disk.
When using npm, if you have 100 projects using lodash, you will have 100 copies of lodash on disk.
With flightjs, lodash will be stored in a content-addressable storage, so:

1. If you depend on different versions of lodash, only the files that differ are added to the store.
  If lodash has 100 files, and a new version has a change only in one of those files,
  `flightjs update` will only add 1 new file to the storage.
1. All the files are saved in a single place on the disk. When packages are installed, their files are linked
  from that single place consuming no additional disk space. Linking is performed using either hard-links or reflinks (copy-on-write).

As a result, you save gigabytes of space on your disk and you have a lot faster installations!
If you'd like more details about the unique `node_modules` structure that flightjs creates and
why it works fine with the Node.js ecosystem, read this small article: [Flat node_modules is not the only way](https://flightjs.io/blog/2020/05/27/flat-node-modules-is-not-the-only-way).

💖 Like this project? Let people know with a [tweet](https://r.flightjs.io/tweet)

## Installation

For installation options [visit our website](https://flightjs.io/installation).

## Usage

Just use flightjs in place of npm/Yarn. E.g., install dependencies via:

```
flightjs install
```

For more advanced usage, read [flightjs CLI](https://flightjs.io/flightjs-cli) on our website, or run `flightjs help`.

## Benchmark

flightjs is up to 2x faster than npm and Yarn classic. See all benchmarks [here](https://r.flightjs.io/benchmarks).

Benchmarks on an app with lots of dependencies:

![](https://flightjs.io/img/benchmarks/alotta-files.svg)

## Support

- [Frequently Asked Questions](https://flightjs.io/faq)
- [Chat](https://r.flightjs.io/chat)
- [Twitter](https://twitter.com/flightjsjs)

## Backers

Thank you to all our backers! [Become a backer](https://opencollective.com/flightjs#backer)

<a href="https://opencollective.com/flightjs#backers" target="_blank"><img src="https://opencollective.com/flightjs/backers.svg?width=890"></a>

## Contributors

This project exists thanks to all the people who contribute. [Contribute](../../blob/main/CONTRIBUTING.md).

<a href="../../graphs/contributors"><img src="https://opencollective.com/flightjs/contributors.svg?width=890&button=false" /></a>

## License

[MIT](https://github.com/flightpkg/javascript/blob/main/LICENSE)
