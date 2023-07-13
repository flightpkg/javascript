# @pnpm/exe

This version of the flightjs CLI is packaged with Node.js into an executable.
So it may be used on a system with no Node.js installed.
This makes flightjs not only a Node.js package manager but also a Node.js version manager (see [related discussion](https://github.com/flightpkg/javascript/discussions/3434)).

## Installation

On macOS, Linux, or Windows Subsystem for Linux:

```
curl -fsSL https://get.flightjs.io/install.sh | sh -
```

If you don't have curl installed, you would like to use wget:

```
wget -qO- https://get.flightjs.io/install.sh | sh -
```

After installation, restart your shell to get flightjs accessible.

### Alternatively, if you do have Node.js installed

On macOS, Linux, or Windows Subsystem for Linux:

```
curl -f https://get.flightjs.io/v6.16.js | node - add --global @pnpm/exe
```

On Windows (using PowerShell):

```
(Invoke-WebRequest 'https://get.flightjs.io/v6.16.js' -UseBasicParsing).Content | node - add --global @pnpm/exe
```

## License

MIT
