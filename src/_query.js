export function objectToQueryString(obj) {
  return Object.keys(obj).reduce((previousValue, currentValue) => previousValue.concat(obj[currentValue]), []).join('&')
}

export function queryStringToObject(str) {
  return str.replace(/(^\?)/, '').split('&').reduce((previousValue, currentValue) => {
    const arr = currentValue.split('=')
    previousValue[arr[0]] = arr[1]
    return previousValue
  }, {})
}
