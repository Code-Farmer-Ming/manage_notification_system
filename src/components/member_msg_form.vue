<template>
<div class="row">
  <div class="col-sm-6">
    <form v-on:submit.prevent="save">
      <div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <label>Member ids(such as xxx,xxx,xxx)</label>
            <input type="text" name="xxx"  required="required"  class="form-control"  v-model="msg.condition.member_ids">
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
              <input type="text" name="link"  class="form-control"  v-model="msg.link">

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
            <input type="datetime-local" name="bdaytime" v-bind:required='msg.scheduled_at!=null' v-model='msg.scheduled_at' class="form-control datepicker">
          </div>
        </div>
      </div>
      <div class="row submit">
        <div class="col-xs-12">
          <button class="btn btn-lg btn-success pns-submit">Send Notification</button>
        </div>
      </div>
    </form>
  </div>

  <div class="col-sm-6">
    <h4>Preview</h4>
    <p>
      <label for="">To</label> {{msg.condition.member_ids}}
    </p>
    <p>
      <label for="">Text</label>&nbsp;{{msg.text}}
    </p>
    <p v-show='msg.link'>
      <label for="">Link</label> {{msg.link}}
    </p>
    <p v-show='msg.scheduled_at'>
      <label for="">schedule</label> {{msg.scheduled_at}}
    </p>
  </div>
</div>
</template>

<script>
export default {
 
  props: ['msg'],
  methods: {
    save() {
      this.$emit('onsave')
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
          this.msg.scheduled_at = 'Time'
        }

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
