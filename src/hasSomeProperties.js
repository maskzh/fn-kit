/**
 * 判断对象是否拥有自己的属性
 * @param {object} obj 需要判断的对象
 * @return {boolean}
 */

export default function hasSomeProperties(obj) {
  let flag = false
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      flag = true
    }
  }
  return flag
}
