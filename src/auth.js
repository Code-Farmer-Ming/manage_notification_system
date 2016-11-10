import Vue from 'vue'

export default {
  // Send a request to the login URL and save the returned JWT
  login(user) {

    return Vue.http.post('sessions', user).then((response) => {
      localStorage.setItem('id_token', response.body.token)
      Vue.http.headers.common['X-Authorization'] = response.body.token
      return 'ok'
    }, (responseError) => {
      return responseError.body.msg
    })
  },

  // To log out
  logout: function() {
    localStorage.removeItem('id_token');
    Vue.http.headers.common['X-Authorization'] = ''
  },
  checkAuth() {
    Vue.http.headers.common['X-Authorization'] = localStorage.getItem('id_token') || ''
    return localStorage.getItem('id_token') != null
  }


}
