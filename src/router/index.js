import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routesFiles = require.context('./../view', true, /\.vue$/)

const routes = []
export const routesList = []
routesFiles.keys().forEach(key => {
  const component = routesFiles(key).default || {}
  const { name, title, hide } = component
  if (name) {
    const route = {
      path: `/${name}`,
      title,
      name
    }
    if (!hide) {
      routesList.push(route)
      routes.push({
        ...route,
        component
      })
    }
  }
})

export default new Router({
  routes
})
