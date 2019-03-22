<template>
  <div class="row">
    <div class="col-sm-6">
      <form v-on:submit.prevent="save">
        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>City</label>
              <select
                class="form-control"
                required="required"
                multiple="multiple"
                v-model="msg.condition.cities"
              >
                <option v-for="(item,index) in cities" :key="index">{{item}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>Member Type</label>
              <br>
              <label v-for="(item ,index) in member_types" :key="index">
                <input
                  name="member_type"
                  :value="item"
                  v-model="msg.condition.member_type"
                  type="radio"
                >
                {{item}}
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div class="row" v-if="msg.condition.member_type=='member'">
          <div class="col-xs-12">
            <div class="form-group">
              <label>Member Level</label>
              <select
                class="form-control"
                required="required"
                multiple="multiple"
                v-model="msg.condition.levels"
              >
                <option v-for="(item,index) in levels" :key="index">{{item}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>Language</label>
              <select class="form-control" required="required" v-model="msg.condition.language">
                <option v-for="(item,index) in languages" :key="index">{{item}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>Title (Optional)</label>
              <input class="form-control" v-model="msg.title" name="content_en">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>Text</label>
              <textarea
                class="form-control"
                required="required"
                style="height: 10em"
                v-model="msg.text"
                name="content_en"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>Enter App Path (Optional)</label>
              <input type="text" name="link" class="form-control" v-model="msg.link">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>Type</label>
              <select class="form-control" v-model="msg.channel">
                <option value="app">app</option>
                <option value="inner_msg">Inner Msg</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="form-group">
              <label>When to send this Notification?</label>
              <br class="clear">
              <label class="radio-inline">
                <input type="radio" name="when" value="now" v-model="msg_type">
                Immediately
              </label>
              <label class="radio-inline">
                <input type="radio" name="when" value="later" v-model="msg_type">
                Scheduled Date
              </label>
            </div>
          </div>
        </div>
        <div class="row" v-show="msg.scheduled_at!=null">
          <div class="col-xs-12 datetime">
            <div class="form-group">
              <label>Date Time</label>
              <br>
              <input
                type="datetime-local"
                name="bdaytime"
                v-bind:required="msg.scheduled_at!=null"
                v-model="msg.scheduled_at"
                class="form-control datepicker"
              >
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
        <label for>To</label>
        {{msg.condition.cities}}
      </p>
      <p>
        <label for>Level</label>
        {{msg.condition.levels}}
      </p>
      <p>
        <label for>Language</label>
        {{msg.condition.language}}
      </p>
      <p>
        <label for>Title</label>
        &nbsp;{{msg.title}}
      </p>
      <p>
        <label for>Text</label>
        &nbsp;{{msg.text}}
      </p>
      <p v-show="msg.link">
        <label for>Link</label>
        {{msg.link}}
      </p>

      <p>
        <label for>Type</label>
        &nbsp;{{msg.type}}
      </p>
      <p v-show="msg.scheduled_at">
        <label for>schedule</label>
        {{msg.scheduled_at}}
      </p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      cities: ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'chengdu', 'hangzhou',
        'suzhou', 'chongqing', 'xiamen', 'qingdao', 'wuhan', 'xi\'an', 'zhengzhou', 'hongkong',
        'bangkok', 'macau', 'pattaya', 'phuket', 'chiangmai', 'huahin', 'kohsamui'
      ],
      levels: ['diamond', 'gold', 'jade', 'basic'],
      languages: ['en', 'zh', 'th'],
      linkTemplates: ['', '/sites/wee', '/sites/event'],
      send_to: 'regions',
      member_types: ['member', 'guest']
    }
  },
  props: ['msg'],
  methods: {
    save () {
      this.$emit('onsave')
    }
  },
  computed: {
    msg_type: {
      get () {
        if (this.msg.scheduled_at == null) {
          return 'now'
        } else {
          return 'later'
        }
      },
      set (val) {
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






















