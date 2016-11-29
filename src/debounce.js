/**
 * 延迟执行
 * @param {function} fn 函数
 * @param {number} delta 执行间隔
 * @param {object} context 执行上下文
 * @return {function}
 */

export default function debounce(fn, delta = 500, context) {
  let _timer = null

  return function() {
    if (_timer) clearTimeout(_timer)

    const args = arguments
    _timer = setTimeout(function() {
      fn.apply(context, args)
    }, delta)
  }
}
