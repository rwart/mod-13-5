/**
 * timeFormat module
 * @module modules/timeFormat
 */
module.exports = {
  /**
   * Funtion converts time format in Polish language
   *
   * @param  {string} time time in seconds
   * @return {string}      time in format: x hour(s) y minute(s) z second(s)
   *  in Polish language:  x godz. y min. z sek.
   */
  toHMSinPolish: function (time) {
    return timetoHMSinPolish(time);
  },
};
function timetoHMSinPolish(time) {
  'use strict'; // time - total seconds {string}
  var s = parseInt(time);  // total seconds {integer}
  var h   = Math.floor(s / 3600); // hours
  var m = Math.floor((s - (h * 3600)) / 60); //minutes
  var sr = (s - (h * 3600) - (m * 60)); // seconds rest
  var ts = ''; // output time string
  ts += (h > 0)  ? (h.toString() + ' godz. ') : ('');
  ts += (m > 0)  ? (m.toString() + ' min. ')  : ('');
  ts += (sr > 0) ? (sr.toFixed() + ' sek.')   : ('');
  return ts;
}
