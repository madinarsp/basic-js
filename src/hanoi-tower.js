const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let resObj = {};
  let turns, seconds;
  turns = Math.pow(2, disksNumber) - 1;
  seconds = Math.floor(turns * 3600 / turnsSpeed);  //turnsSpeed in turns per hour
  resObj["turns"] = turns;
  resObj["seconds"] = seconds;
  return resObj;
}

module.exports = {
  calculateHanoi
};
