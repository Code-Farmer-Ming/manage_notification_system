<template>
<div class="container">
  <form id="loginForm" v-on:submit.prevent="login" class="panel center-block">
    <h1>Welcome to DCPNS</h1>
    <p>Please login to continue.</p>
    <div class="form-group">
      <input class="form-control" type="text" name="username" v-model="user.user.name" placeholder="Username" />
    </div>
    <div class="form-group">
      <input class="form-control" type="password" v-model="user.user.pwd" name="password" placeholder="Password" />
    </div>
    <div class="form-group">
      <button class="btn btn-danger" v-on:click='login'>Login</button>
    </div>
    <div class="alert alert-danger" v-show="error">
      {{error}}
    </div>
  </form>

</div>
</template>

<script>
import Vue from 'vue'
import Auth from '../auth.js'
export default {
  data() {
    return {
      error: null,
      isLogin: true,
      user: {
        user: {
          name: '',
          pwd: ''
        }
      }
    }
  },
  methods: {
    login () {
      let router = this.$router
      Auth.login(this.user).then((response) => {

        if (response=='ok'){
          router.push({ path: '/' })

          console.log(response)
        }
        else{
          this.error = response
        }
      } )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.loginBody {
  background: #111 url(../assets/imgs/bg.jpg) no-repeat !important;
  background-size: cover !important;
}

#loginForm {
  width: 300px;
  background: #fff;
  padding: 30px;
}

#loginForm .btn,
#loginForm input {
  width: 100%;
}

#loginForm h1 {
  margin-top: 0;
}
</style>
