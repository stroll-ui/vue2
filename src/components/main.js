import './../assets/style/Init.styl'
import './../assets/style/public.styl'
import stylParams from './../assets/style/variables.styl'
import './../../theme/icon.css'
import iconJson from '../assets/icon/iconfont.json'
import state from './js/state'
import method from './js/method'

const components = {}
const layout = require.context('./modules', true, /index.js$/)
layout.keys().forEach(key => {
  const component = layout(key).default
  components[component.name] = component
})
export const stylConst = stylParams

export const iconName = iconJson

export default {
  install: function (Vue, options = {}) {
    Vue.prototype.$state = state
    Vue.prototype.stylParams = stylParams
    Object.values(components).forEach(component => {
      if (component.name) {
        Vue.component(component.name, component)
      }
    })
    Object.keys(method).forEach(key => {
      Vue.prototype[key] = method[key]
    })
  },
  ...method,
  ...components
}
