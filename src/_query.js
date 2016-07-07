// 将对象序列化为query字符串
export function objectToQueryString(obj) {
  return Object.keys(obj).reduce((previousValue, currentValue) => previousValue.concat(`${currentValue}=${obj[currentValue]}`), []).join('&')
}

// query字符串转化为对象
export function queryStringToObject(str) {
  return str.replace(/(^\?)/, '').split('&').reduce((previousValue, currentValue) => {
    const arr = currentValue.split('=')
    previousValue[arr[0]] = arr[1]
    return previousValue
  }, {})
}
