<template>
  <div class="home">Home</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
.home {
  font-size: large;
  color: red;
}
</style>
