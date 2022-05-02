const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resStr = "" + str;
  if(typeof(options) == "undefined") return resStr;
  if("addition" in options) {
    let addition = "" + options["addition"];
    if("additionRepeatTimes" in options) {
      let additionSeparator = '|';
      if("additionSeparator" in options) {
        additionSeparator = options["additionSeparator"];
      }
      for(let i=0; i<options["additionRepeatTimes"]-1; i++) {
        resStr += addition + additionSeparator;
      }
      resStr += addition;
    }
    else {
      resStr += addition;
    }
  }
  if("repeatTimes" in options) {
    let separator = '+';
    if("separator" in options) {
      separator = options["separator"];
    }
    let tempStr = resStr;
    resStr = "";
    for(let i=0; i<options["repeatTimes"]-1; i++) {
      resStr += tempStr + separator;
    }
    resStr += tempStr;
  }
  return resStr;
}

module.exports = {
  repeater
};
