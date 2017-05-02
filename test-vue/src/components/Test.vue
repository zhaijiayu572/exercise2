<template>
  <div class="myTest">
    <h1>{{ testMsg }}</h1>
    <div>let me test the router</div>
  </div>

</template>
<script>
  export default{
    name:'Test',
    data () {
      return {
        testMsg: 'Hello Test'
      }
    }
  }
</script>
