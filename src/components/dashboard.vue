<template>
<div >
  <h1 class="page-header">Dashboard</h1>
  <h3 class="sub-header">Scheduled Notifications</h3>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
          <th>Scheduled Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>191</td>
          <td>Weekend Promo August 5th</td>
          <td>weekend-push</td>
          <td>5 Aug, 21:00</td>
          <td>
            <a href="" class="btn"><i class="glyphicon glyphicon-pencil"></i></a>
            <a href="" class="btn"><i class="glyphicon glyphicon-trash"></i></a>
          </td>
        </tr>
        <tr>
          <td>192</td>
          <td>Best Brunches in Town</td>
          <td>free-text</td>
          <td>6 Aug, 21:00</td>
          <td>
            <a href="" class="btn"><i class="glyphicon glyphicon-pencil"></i></a>
            <a href="" class="btn"><i class="glyphicon glyphicon-trash"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="sub-header">Recent Notifications</h3>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
          <th>Date Sent</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>187</td>
          <td>Reservation Reminder for Fred Lin</td>
          <td>Reservation Reminder</td>
          <td>7 August 2016, 11:00</td>
          <td>1</td>
        </tr>
        <tr>
          <td>185</td>
          <td>Restaurant Week Prebooking Start</td>
          <td>Event Prebooking Start</td>
          <td>5 August 2016, 11:00</td>
          <td>51251</td>
        </tr>
        <tr>
          <td>187</td>
          <td>Reservation Reminder for Fred Lin</td>
          <td>Reservation Reminder</td>
          <td>7 August 2016, 11:00</td>
          <td>1</td>
        </tr>
        <tr>
          <td>185</td>
          <td>Restaurant Week Prebooking Start</td>
          <td>Event Prebooking Start</td>
          <td>5 August 2016, 11:00</td>
          <td>51251</td>
        </tr>
        <tr>
          <td>187</td>
          <td>Reservation Reminder for Fred Lin</td>
          <td>Reservation Reminder</td>
          <td>7 August 2016, 11:00</td>
          <td>1</td>
        </tr>
        <tr>
          <td>185</td>
          <td>Restaurant Week Prebooking Start</td>
          <td>Event Prebooking Start</td>
          <td>5 August 2016, 11:00</td>
          <td>51251</td>
        </tr>
        <tr>
          <td>187</td>
          <td>Reservation Reminder for Fred Lin</td>
          <td>Reservation Reminder</td>
          <td>7 August 2016, 11:00</td>
          <td>1</td>
        </tr>
        <tr>
          <td>185</td>
          <td>Restaurant Week Prebooking Start</td>
          <td>Event Prebooking Start</td>
          <td>5 August 2016, 11:00</td>
          <td>51251</td>
        </tr>
      </tbody>
    </table>
  </div>
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

</style>
