<template>
<form v-on:submit.prevent="submit">
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>City</label>
        <select class="form-control" required="required" multiple="multiple" v-model="msg.condition.cities">
                                      <option v-for="item in cities">{{item}}</option>
                                  </select>
        <p>
          {{msg.condition.cities}}
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>Member Level</label>
        <select class="form-control" required="required" multiple="multiple" v-model="msg.condition.levels">
                                      <option v-for="item in levels">{{item}}</option>
                                  </select>
        <p>
          {{msg.condition.levels}}
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">

      <div class="form-group">
        <label>Language</label>
        <select class="form-control" required="required" v-model="msg.condition.language">
                                      <option v-for="item in languages">{{item}}</option>
                                  </select>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>Text</label>
        <textarea class='form-control' required="required" style='height: 10em' v-model="msg.text" name="content_en"></textarea>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>Enter App Path (Optional)</label>
        <select class="form-control" v-model="msg.link">
                                      <option v-for="item in linkTemplates">{{item}}</option>
                                  </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <div class="form-group">
        <label>When to send this Notification?</label>
        <br class="clear" />
        <label class="radio-inline">
                                      <input type="radio" name="when" value="now"  v-model="msg_type">
                                      Immediately
                                  </label>
        <label class="radio-inline">
                                      <input type="radio" name="when" value="later"  v-model="msg_type">
                                      Scheduled Date
                                  </label>
      </div>
    </div>
  </div>
  <div class="row" v-show="msg.scheduled_at!=null">
    <div class="col-xs-12 datetime">
      <div class="form-group">
        <label>Date Time</label><br/>
        <input type="datetime-local" name="bdaytime" v-bind:required='msg.scheduled_at!=null'  v-model='msg.scheduled_at'   class="form-control datepicker">
      </div>
    </div>
  </div>
  <div class="row submit">
    <div class="col-xs-12">
      <button class="btn btn-lg btn-success pns-submit">Send Notification</button>
    </div>
  </div>
</form>
</template>

<script>
export default {

  data() {
    return {
      cities: ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'chengdu', 'hangzhou', 'suzhou', 'chongqing', 'xiamen', 'qingdao', 'wuhan', 'XI\'an'],
      levels: ['basic', 'gold'],
      languages: ['en', 'zh', 'th'],
      linkTemplates: ['', '/sites/wee', '/sites/event'],
      send_to: 'regions',

    }
  },
  props: ['msg'],
  methods: {
    submit() {
      this.$emit('onsave', this.msg)
    }
  },
  computed: {
    msg_type: {
      get() {
        if (this.msg.scheduled_at == null) {
          return 'now'
        } else {
          return 'later'
        }
      },
      set(val) {
        if (val == 'now') {
          this.msg.scheduled_at = null
        } else {
          this.msg.scheduled_at = new Date()
        }

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
