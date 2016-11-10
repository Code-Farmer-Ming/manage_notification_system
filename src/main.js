import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import Auth from './auth.js'
import 'assets/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Login from './components/login'
import Home from './components/home'
import New from './components/New'
import Dashboard from './components/dashboard'
import History from './components/history'
// Globally register bootstrap-vue components
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://apns.diningcity.asia'

const router = new VueRouter({
    routes: [{
      path: '/login',
      component: Login,
      auth: false
    },
    {
      path: '',
      component: Home,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          component: Dashboard
        },
        {
          path: 'new',
          component: New
        },
        {
          path: 'history',
          component: History
        }
      ]

    }
    ]
  })
  // authentication service

router.beforeEach(function(to, from, next) {
  if (to.matched[0].meta.requiresAuth && !Auth.checkAuth()) {
    // if route requires auth and user isn't authenticated
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  router: router,
  el: '#app',
  template: '<App/>',
  data: {isLogin: true},
  components: {
    App
  }
})
