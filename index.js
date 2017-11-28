
/**
  * Main module of iteractive program to get information about your system enviroment
  * @module index
  * @see module: OSInfo, timeFormat
  */

var os = require('os');
var OSinfo = require('./modules/OSInfo');

var help = '\n';
help += 'exit      => exit app\n';
help += 'node -v   => node version\n';
help += 'lang      => system language\n';
help += 'getOSinfo => system information\n';
help += 'help      => help\n\n';

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
  'use strict';
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
      case '/exit':
      case 'exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/node -v':
      case 'node -v':
        process.stdout.write('node version: ' + process.versions.node + '\n');
        break;
      case '/lang':
      case 'lang':
        if (process.env.OS !== 'Windows_NT') {
          process.stdout.write('system language: ' + process.env.LANGUAGE + '\n');
        } else {
          process.stdout.write('Program can not read system language on Windows.\n');
        }

        break;
      case '/getOSinfo':
      case 'getOSinfo':
        OSinfo.print();
        break;
      case 'help':
        process.stdout.write(help);
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});
