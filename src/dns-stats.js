const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((domain) => {
    let currDomain = "";
    let tempArr = domain.split(".").reverse().map(elem => "." + elem);
    // let tempArr = [".com", ".epam"];
    for(let i = 0; i < tempArr.length; i++) {
      currDomain += tempArr[i];
      let currValue = res[currDomain];
      let valToSet = currValue == undefined ? 1 : currValue + 1;
      res[currDomain] = valToSet;
    }
  });
  // res[".com"] = 1;
  return res;
}

module.exports = {
  getDNSStats
};
