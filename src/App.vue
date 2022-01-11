<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="width: 100px">
    <button @click="increment">加10</button>
    <button @click="incrementAsync">异步加5</button>
    <button @click="goPage(1)">跳转到home页</button>
    <div style="background: aliceblue">{{ doneTodos }}}</div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {},
  methods: {
    increment() {
      this.$store.commit('increment', 10) 	//传入额外的参数10，即 mutation 的 载荷（payload）
      console.log(this.$store.state.count)
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync', 5) 	//通过 Vuex Store 提供的 this.$store.dispatch() 方法调用actions 定义的方法
      console.log(this.$store.state.count)
    },
    goPage(type) {
      console.log(this.$route)
      if (type === 1) {
        this.$router.push({path: '/home'})
      }
    }
  },
  computed: {
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 10px;
  max-width: 300px;
  justify-content: center;
}

.main {
  width: 100%;
  height: 500px;
  background: beige;
}
</style>
