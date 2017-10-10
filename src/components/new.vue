<template>
<div>
  <div v-show="send_status=='success'" class="alert alert-success alert-dismissible" role="alert">
   send success.
</div>
  <h1 class="page-header">New</h1>
  <div class="row">
    <div class="col-xs-12 col-sm-12">
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" v-bind:class="{active: tab=='by_region'}"><a href='#' v-on:click.prevent="tab = 'by_region'">By Region</a></li>
        <li role="presentation" v-bind:class="{active: tab=='by_member'}"><a href='#'   v-on:click.prevent="tab = 'by_member'">By Member</a></li>
      </ul>
      <br>
      <region-msg-form v-bind:msg='msg' v-on:onsave='regionSave' v-show="tab=='by_region'"></region-msg-form>

      <member-msg-form v-bind:msg='msg' v-show="tab=='by_member'" v-on:onsave='memberSave'></member-msg-form>
    </div>

  </div>
</div>
</template>

<script>
import RegionMsgForm from './region_msg_form'
import MemberMsgForm from './member_msg_form'
export default {

  data() {
    return {
      send_status: 'normal',
      tab: 'by_region',
      msg: {}
    }
  },
  created() {
    this.resetData()
  },
  methods: {
    memberSave(){
      this.$http.post('msgs/members',this.get_msg).then((response)=>{
      this.send_status ='success'
      this.resetData()
      },(error)=>{
        console.log(error)
      })
    },
    regionSave() {
      this.$http.post('http://apns.diningcity.asia/msgs/regions',this.get_msg).then((response)=>{
      this.send_status ='success'
      this.resetData()
      },(error)=>{
        console.log(error)
      })
    },
    resetData(){
      this.msg = {
        text: '',
        link: '',
        title: 'DiningCity',
        scheduled_at: null,
        channel: 'app',
        condition: {
          language: 'en',
          cities: [],
          levels: [],
          member_ids: ''
        }
      }
    }
  },
  computed: {
    get_msg(){
        let new_msg  = {msg: {}}
        new_msg.msg = JSON.parse(JSON.stringify(this.msg))
        new_msg.msg.condition.cities = new_msg.msg.condition.cities.join()
        new_msg.msg.condition.levels = new_msg.msg.condition.levels.join()
        console.log(new_msg)
        return new_msg
    }
  },
  components: {
    RegionMsgForm,
    MemberMsgForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
