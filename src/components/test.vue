<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci consequuntur debitis dolorem eveniet exercitationem facilis minus necessitatibus nihil numquam obcaecati omnis, porro provident quaerat reprehenderit tenetur totam ut!                                    </p>
  </div>
</template>
<script>
  export default {
    name: 'sheet',
    data () {
      return {
        msg: 'hehe wangting'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
