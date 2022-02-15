<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" style="background-color: red">
    <button @click="increment">加10</button>
    <button @click="incrementAsync">异步加5</button>
    <button @click="goPage(1)">跳转到home页</button>
    <button @click="goPage(2)">跳转到tab页</button>
    <div>
      <button @click="doAnim">动画测试</button>
      <transition name="anim1">
        <div v-if="animVisiable">动画组件</div>
      </transition>
    </div>
    <div style="background: aliceblue">{{ doneTodos }}}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this.$route)
  },
  data() {
    return {
      animVisiable: false
    }
  },
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
      } else if (type === 2) {
        this.$router.push({path: '/setting'})
      }
    },
    doAnim() {
      this.animVisiable = !this.animVisiable;
    }
  },
  computed: {
    doneTodos() {	//创建一个 computed 属性进行调用 getters
      return this.$store.getters.doneTodos;
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  font-size: large;
}

button {
  margin: 10px;
  max-width: 300px;
  justify-content: center;
}

.anim1-enter-active, .anim1-leave-active {
  transition: opacity 5s;
}

.anim1-enter, .anim1-leave-to {
  opacity: 0;
}
</style>
