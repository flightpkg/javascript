const fs = require('fs')
const path = require('path')

const flightjsCli = path.join(__dirname, 'flightjs')
fs.unlinkSync(flightjsCli)
fs.writeFileSync(flightjsCli, 'This file intentionally left blank', 'utf8')
