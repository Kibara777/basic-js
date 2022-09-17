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
      let DNSOpt = {};
  
  for (let i = 0; i < domains.length; i++) {
    let domainsArr = domains[i].split('.').reverse();//.join('.');
    let DNSaddress = '';
    for (let k = 0; k < domainsArr.length; k++) {
      DNSaddress = DNSaddress + '.' + domainsArr[k];
      if (DNSOpt.hasOwnProperty(DNSaddress)) {
          DNSOpt[DNSaddress]++;
      } else {
          DNSOpt[DNSaddress]=1;
      }
    };
  }
  return DNSOpt;
}


module.exports = {
  getDNSStats
};
