import { Message, Notification, MessageBox } from 'element-ui'
import '@theme/message.css'
import '@theme/notification.css'
import '@theme/message-box.css'
export const $copyText = function (val) {
  return navigator.clipboard.writeText(val).then(_ => {
    $message({
      message: '复制成功',
      type: 'success'
    })
  }).catch(e => {
    $message({
      message: '复制失败 原因查看console',
      type: 'error'
    })
    console.log(e)
  })
}

export const $copyDb = function (obj) {
  return navigator.clipboard.write(obj).then(_ => {
    $message({
      message: '复制成功',
      type: 'success'
    })
  }).catch(e => {
    $message({
      message: '复制失败 原因查看console',
      type: 'error'
    })
    console.log(e)
  })
}

export const $wHeight = function () {
  return window.innerHeight
}

export const $wWidth = function () {
  return window.innerWidth
}

export const $refHeight = function (ref) {
  const el = this.$refs[ref]
  const elHeight = window.getComputedStyle(el).height
  return parseInt(elHeight)
}

export const $refWidth = function (ref) {
  const el = this.$refs[ref]
  const elWidth = window.getComputedStyle(el).width
  return parseInt(elWidth)
}

export const $setRefStyle = function (ref, style) {
  const el = this.$refs[ref]
  const type = $typeOf(style)
  const typeFn = {
    '[object Object]' () {
      Object.keys(style).forEach(key => {
        el.style[key] = style[key]
      })
    },
    '[object String]' () {
      el.style.height = style
    },
    '[object Number]' () {
      el.style.height = `${style}px`
    }
  }
  const typeFnKey = Object.keys(typeFn)
  if (typeFnKey.includes(type)) {
    typeFn[type]()
  } else {
    $message({
      message: '数据类型错误',
      type: 'error'
    })
  }
}

export const $typeOf = function (val) {
  return {}.toString.call(val)
}

export const $message = async function (options = {}) {
  await Message.closeAll()
  await Message(options)
}

export const $notify = Notification

export const $msgBox = MessageBox
export const $alert = MessageBox.alert
export const $confirm = MessageBox.confirm
export const $prompt = MessageBox.prompt

export const $isFullScreen = async function () {
  return document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement
}

export const $fullScreen = async function (el) {
  const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen
  let wscript = ''

  if (typeof rfs !== 'undefined' && rfs) {
    rfs.call(el)
    return
  }

  if (typeof window.ActiveXObject !== 'undefined') {
    wscript = new window.ActiveXObject('WScript.Shell')
    if (wscript) {
      wscript.SendKeys('{F11}')
    }
  }
}

export const $exitFullScreen = async function () {
  const el = document
  const cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen
  let wscript = ''

  if (typeof cfs !== 'undefined' && cfs) {
    cfs.call(el)
    return
  }
  if (typeof window.ActiveXObject !== 'undefined') {
    wscript = new window.ActiveXObject('WScript.Shell')
    if (wscript != null) {
      wscript.SendKeys('{F11}')
    }
  }
}

export default {
  $copyText,
  $copyDb,
  $wHeight,
  $refHeight,
  $wWidth,
  $refWidth,
  $setRefStyle,
  $isFullScreen,
  $fullScreen,
  $exitFullScreen,
  $typeOf,
  $message,
  $notify,
  $msgBox,
  $alert,
  $confirm,
  $prompt
}
