<template>
<div>
  <h1 class="page-header">New</h1>
  <div class="row">
    <div class="col-xs-12 col-sm-4">

      <new-region-msg v-bind:msg='msg' v-on:onsave='preview'  ></new-region-msg>
    </div>
  </div>
</div>
</template>

<script>
import NewRegionMsg from './new_region_msg'
export default {

  data() {
    return {

      msg: {
        condition: {
          language: 'en',
          cities: [],
          levels: []
        },
        scheduled_at: null
      },
      membersMsg:{
        condition: {
          member_ids: []
        }
      }
    }
  },
  methods: {
    save() {
      console.log('submit');
      this.isPreview = true
      this.msg = {
        condition: {
          language: 'en',
          cities: [],
          levels: []
        }
      }
    },
    preview() {
      this.isPreview = true
    }
  },
  components: {
    NewRegionMsg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
