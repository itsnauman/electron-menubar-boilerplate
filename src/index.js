'use strict'

const path = require('path')
var menubar = require('menubar')

var mb = menubar({'index': path.join('file://', __dirname, '/index.html')})

mb.on('ready', function ready() {
  console.log('app is ready')
})
