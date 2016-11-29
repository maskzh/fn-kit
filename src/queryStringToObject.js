/**
 * query 字符串转化为对象
 * @param {string} str query 字符串
 * @return {object}
 */

export default function queryStringToObject(str) {
  return str.replace(/(^\?)/, '').split('&').reduce((previousValue, currentValue) => {
    const arr = currentValue.split('=')
    previousValue[arr[0]] = arr[1]
    return previousValue
  }, {})
}
