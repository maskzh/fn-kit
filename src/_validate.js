export function isMobilePhoneNumber(value) {
  return /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|17[0-9]{1})+\d{8})$/.test(value)
}

export function isEmail(value) {
  return /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(value)
}
