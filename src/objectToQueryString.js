/**
 * 将对象序列化为 query 字符串
 * @param {object} obj 对象
 * @return {string}
 */

export default function objectToQueryString(obj) {
  return Object.keys(JSON.parse(JSON.stringify(obj))).reduce((previousValue, currentValue) => previousValue.concat(`${currentValue}=${obj[currentValue]}`), []).join('&')
}
