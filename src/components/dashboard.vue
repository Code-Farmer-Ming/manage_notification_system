<template>
<div >
  <h1 class="page-header">Dashboard</h1>
  <h3 class="sub-header">Scheduled Notifications</h3>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Text</th>
          <th class="col-md-2">Scheduled Date</th>
          <th class="col-md-2">Condition</th>
          <th class="col-md-2">Sender</th>
          <th class="col-md-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='item in schedules'>
          <td>{{item.text}}</td>
          <td class="col-md-3" >{{item.scheduled_at}}</td>
          <td class="col-md-3" style="word-break: break-all;">{{item.condition}}</td>
          <td class="col-md-2">{{item.operator}}</td>
          <td>
              <a href="#" v-on:click.prevent="removeMsg(item)" ><i class="glyphicon glyphicon-trash"></i></a>
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
          <th>Text</th>
          <th class="col-md-2">Date Sent</th>
          <th class="col-md-2">Condition</th>
          <th class="col-md-2">Sender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='item in recents'>
          <td>{{item.text}}</td>
          <td class="col-md-3" >{{item.send_at}}</td>
          <td class="col-md-3" style="word-break: break-all;">{{item.condition}}</td>
          <td class="col-md-2">{{item.operator}}</td>
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
  mounted(){
    this.getRecent()
    this.getSchedules()
  },
  data() {
    return {
      schedules: [],
      recents: []
    }
  },
  methods: {
    getRecent () {
      this.$http.get('msgs/history').then((response)=>{
        this.recents =  response.data
      })
  },
  getSchedules(){
    this.$http.get('msgs/schedules').then((response)=>{
      this.schedules =  response.data
    })
  },
    removeMsg(msg) {
      if (confirm("Are U Sure?"))
       {
         this.$http.delete('msgs/'+msg.id).then((response)=>{
           this.getSchedules()
         })
       }
    }

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
