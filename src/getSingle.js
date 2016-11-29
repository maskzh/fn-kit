/**
 * 生成惰性单例
 * @param {function} fn 函数
 * @param {object} context 执行上下文
 * @return
 */

export default function getSingle(fn, context) {
  let result
  return function() {
    return result || (result = fn.apply(context, arguments))
  }
}
