<template>
<div >
  <h1 class="page-header">History</h1>
  <nav>
<ul class="pager">
  <li class="previous" v-bind:class="{disabled: page==1}"><a href="#" v-on:click.prevent="prePage()" >&larr; Newer</a></li>
  <li class="next" v-bind:class="{disabled: page==totalPage}"><a href="#" v-on:click.prevent="nextPage()">Older &rarr;</a></li>
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
    <li class="previous" v-bind:class="{disabled: page==1}"><a href="#" v-on:click.prevent="prePage()">&larr; Newer</a></li>
    <li class="next" v-bind:class="{disabled: page==totalPage}"><a href="#" v-on:click.prevent="nextPage()"  >Older &rarr;</a></li>
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
        page: 1,
        nextPageNumber:1,
        prePageNumber: 1,
        totalPage: 1
    }
  },
  methods: {
    getHistory () {
      this.$http.get('msgs/history', {params: {page: this.page},credentials: true}).then((response)=>{
        this.histories =  response.data
        this.nextPageNumber = response.headers.get('next_page')
        this.prePageNumber = response.headers.get('prev_page')
        this.totalPage = response.headers.get('total_pages')
        debugger
        console.log(response.headers.get('total_count'))

      })
    },
    nextPage () {
      this.page = this.nextPageNumber
      this.getHistory()
    },
    prePage () {
      this.page = this.prePageNumber
      this.getHistory()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
