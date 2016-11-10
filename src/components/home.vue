<template lang="html">
  <div>
  <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">DiningCity Push Notification Service</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><a v-on:click="logout()" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
              <li><router-link to="/" active-class='active' exact><i class="glyphicon glyphicon-dashboard"></i> Dashboard</router-link></li>
              <li><router-link to="new" active-class='active'><i class="glyphicon glyphicon-plus"></i> New Notification</router-link></li>
              <li><router-link to="history" active-class='active'><i class="glyphicon glyphicon-list-alt"></i> History</router-link></li>
              <!-- <li><a href="settings.html"><i class="glyphicon glyphicon-cog"></i> Settings</a></li> -->
            </ul>
          </div>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <router-view>
            </router-view>



          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Auth from '../auth.js'

export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {
    logout() {
      Auth.logout()
      this.$router.push('/login')
    }
  },

  components: {}
}
</script>

<style lang="css">

</style>
