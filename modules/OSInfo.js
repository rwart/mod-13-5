/**
 * OSInfo module.
 * @module modules/OSInfo
 * @see module: modules/timeFormat
 */

os = require('os');
var colors = require('colors');
timeFormat = require('./timeFormat');

module.exports = {
  /**
   * Sends to console following system enviroment parameters: System, Release,
   *  CPU model, Uptime, User name, Home dir
   */
  print: function () {
    getOSinfo();
  },
};

function getOSinfo() {
  var type = os.type();
  if (type === 'Darwin') {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }

  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime(); // in seconds
  var userInfo = os.userInfo();
  console.log('System:'.gray, type);
  console.log('Release:'.red, release);
  console.log('CPU model:'.blue, cpu);
  console.log('Uptime: ~'.green, timeFormat.toHMSinPolish(uptime));
  console.log('User name:'.yellow, userInfo.username);
  console.log('Home dir:'.white, userInfo.homedir);
}
