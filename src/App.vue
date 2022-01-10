<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="increment">加10</button>
    <button @click="incrementAsync">异步加5</button>
    <div>{{doneTodos}}}</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    increment() {
      this.$store.commit('increment', 10) 	//传入额外的参数10，即 mutation 的 载荷（payload）
      console.log(this.$store.state.count)
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync',5) 	//通过 Vuex Store 提供的 this.$store.dispatch() 方法调用actions 定义的方法
      console.log(this.$store.state.count)
    },
  },
  computed:{
    doneTodos() {	//创建一个 computed 属性进行调用 getters
      return this.$store.getters.doneTodos;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
