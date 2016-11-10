<template>
<div v-bind:class="bodyClass" class="myBody">
  <router-view>
  </router-view>
</div>
</template>
<script>
export default {
  computed: {
    bodyClass() {
      return this.$route.path == '/login' ? 'loginBody' : ''
    }
  },
}
</script>

<style>

</style>
