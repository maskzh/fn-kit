/**
 * 格式化金额
 * @param {string|number} number 要格式化的数字
 * @param {number} decimals 保留几位小数
 * @param {string} decPoint 小数点符号
 * @param {string} thousandsSep 千分位符号
 * @return {string}
 */

export default function numberFormat(number, decimals, decPoint, thousandsSep) {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
    dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec)
      return '' + Math.floor(n * k) / k
    }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
