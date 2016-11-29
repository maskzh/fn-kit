/**
 * 函数节流，避免频发调用
 * @param {function} fn 函数
 * @param {number} delta 执行间隔
 * @param {object} context 执行上下文
 * @return {function}
 */

export default function throttle(fn, delta = 500, context) {
  let _safe = true

  return function() {
    const args = arguments

    if (_safe) {
      fn.apply(context, args)

      _safe = false
      setTimeout(function() {
        _safe = true
      }, delta)
    }
  }
}
