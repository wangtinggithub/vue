<template>
<div class="body">
  <header>
    {{ msg }}
  </header>
  <div class="container">
    <div class="left">
      <ul>
        <li class="link">
          <router-link to="/sheet">sheet</router-link>
        </li>
        <li class="link">
          <router-link to="/detail">detail</router-link>
        </li>

      </ul>
    </div>
  <div class="right">
    <router-view></router-view>
  </div>
</div>
</div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body{
    position: relative;
    height:100%;
  }
  header{
    background: black;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .container{
    height: calc(100% - 50px);
  }
  .link{
    display: block;
    padding: 0px;
    margin:0px;
  }
  .link a{
    display: block;
    padding: 10px 10px ;
    text-decoration: none;
    color:black;
    background: #ddd;
  }
  .left{
    width: 300px;
    height: 100%;
    background: #eee;
    float: left;
  }
  .right{
    width:calc(100% - 300px);
    float: left;
    height:100%;
    overflow: auto;
  }
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
