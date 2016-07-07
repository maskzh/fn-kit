// 生成 ID
export function genId(len, prefix, keyspace) {
  if (len == null) len = 32
  if (prefix == null) prefix = ''
  if (keyspace == null) keyspace = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  while (len-- > 0) {
    prefix += keyspace.charAt(Math.floor(Math.random() * keyspace.length))
  }
  return prefix
}

// 惰性单例
export function getSingle(fn) {
  var result
  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}

// 函数节流，避免频发调用
export function throttle(fn, interval) {
  var _self = fn,
    timer, firstTime = true
  return function() {
    var args = arguments,
      _me = this
    if (firstTime) {
      _self.apply(_me, args)
      return firstTime = false
    }
    if (timer) {
      return false
    }
    timer = setTimeout(function() {
      clearTimeout(timer)
      timer = null
      _self.apply(_me, args)
    }, interval || 500)
  }
}

// 函数分时，按照一定的时间间隔，批量得处理数据
export function timeChunk(ary, fn, count) {
  let obj, t
  const len = ary.length
  const start = function() {
    for (var i = 0; i < Math.min(count || len); i++) {
      obj = ary.shift()
      fn(obj)
    }
  }
  return function() {
    t = setInterval(function() {
      if (len === 0) {
        return clearInterval(t)
      }
      start()
    }, 200)
  }
}

// 深复制
export function copy(obj, deep) {
  // util作为判断变量具体类型的辅助模块
  const util = (function() {
    const class2type = {}
    const arr = ['Null', 'Undefined', 'Number', 'Boolean', 'String', 'Object', 'Function', 'Array', 'RegExp', 'Date']
    arr.forEach((item) => {
      class2type[`[object ${item}]`] = item.toLowerCase()
    })

    function isType(obj, type) {
      return getType(obj) === type
    }

    function getType(obj) {
      return class2type[Object.prototype.toString.call(obj)] || 'object'
    }

    return {
      isType: isType,
      getType: getType
    }
  })()

  // 如果obj不是对象，那么直接返回值就可以了
  if (obj === null || typeof obj !== 'object') return obj

  // 定义需要的局部变脸，根据obj的类型来调整target的类型
  var i, target = util.isType(obj, 'array') ? [] : {},
    value, valueType

  for (i in obj) {
    value = obj[i]
    valueType = util.getType(value)
    // 只有在明确执行深复制，并且当前的value是数组或对象的情况下才执行递归复制
    if (deep && (valueType === 'array' || valueType === 'object')) {
      target[i] = copy(value)
    } else {
      target[i] = value
    }
  }
  return target
}

// 判断对象是否为空
export function hasSomeProperties(obj) {
  let flag = false
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      flag = true
    }
  }
  return flag
}

// 格式化数字金额
export function numberFormat(number, decimals, decPoint, thousandsSep) {
  /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * decPoint：小数点符号
   * thousandsSep：千分位符号
   * */
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
    dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec)
      return '' + Math.ceil(n * k) / k
    }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
