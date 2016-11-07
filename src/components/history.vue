<template>
<div >
  <h1 class="page-header">History</h1>
  <nav>
<ul class="pager">
  <li class="previous"><a href="#" v-on:click.prevent="prePage()">&larr; Newer</a></li>
  <li class="next"><a href="#" v-on:click.prevent="nextPage()">Older &rarr;</a></li>
</ul>
</nav>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Text</th>
          <th class="col-md-2">Date Sent</th>
          <th class="col-md-2">Type</th>
          <th class="col-md-2">Users</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for='item in histories'>
          <td>{{item.text}}</td>
          <td class="col-md-3" >{{item.send_at}}</td>
          <td class="col-md-3" style="word-break: break-all;">{{item.condition}} {{item.scheduled_at}}</td>
          <td class="col-md-2">{{item.operator}}</td>
        </tr>

      </tbody>
      <tfoot>

      </tfoot>
    </table>
    <nav>
  <ul class="pager">
    <li class="previous"><a href="#" v-on:click.prevent="prePage()">&larr; Newer</a></li>
    <li class="next"><a href="#" v-on:click.prevent="nextPage()">Older &rarr;</a></li>
  </ul>
</nav>
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
        histories: [],
        page: 1
    }
  },
  methods: {
    getHistory () {
      this.$http.get('http://apns.diningcity.asia/msgs/history', {params: {page: this.page}}).then((response)=>{
        this.histories =  response.data
      })
    },
    nextPage () {
      this.page += 1
      this.getHistory()
    },
    prePage () {
      this.page -= 1
      this.getHistory()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
