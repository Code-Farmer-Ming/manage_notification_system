<template>
<div >
  <h1 class="page-header">History</h1>

  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Text</th>
          <th>Date Sent</th>
          <th>Type</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for='item in histories'>
          <td>{{item.text}}</td>
          <td>{{item.send_at}}</td>
          <td>{{item.condition}} {{item.scheduled_at}}</td>
          <td>{{item.operator}}</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
</template>

<script>

export default {

  beforeMount(){
    this.getHistory()
  },

  data() {
    return {
        histories: []

    }
  },
  methods: {
    getHistory () {
      this.$http.get('http://apns.diningcity.asia/msgs/history').then((response)=>{
        this.histories =  response.data
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
