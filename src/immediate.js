/**
 * 立即执行
 * @param {function} fn 函数
 * @param {number} delta 执行间隔
 * @param {object} context 执行上下文
 * @return {function}
 */

export default function immediate(fn, delta = 500, context) {
  let _timer = null
  let _safe = true

  return function() {
    const args = arguments

    if (_safe) {
      fn.apply(context, args)
      _safe = false
    }

    if (_timer) clearTimeout(_timer)
    _timer = setTimeout(function() {
      _safe = true
    }, delta)
  }
}
