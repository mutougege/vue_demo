<template>
  <div class="setting">
    <el-header height="80px">header</el-header>
    <el-main>
      <el-menu mode="vertical" @select="onSelect">
        <el-menu-item index="1">
          <i class="el-icon-menu"/>
          <span slot="title">账号管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-setting"/>
          <span slot="title">其他管理</span>
        </el-menu-item>
      </el-menu>
      <router-view/>
    </el-main>
    <el-footer height="60px">footer</el-footer>
  </div>
</template>

<script>
export default {
  name: "Setting",
  methods: {
    onSelect(index, indexPath) {
      console.log('zzww methods::onct', index + " " + indexPath)
      if (index === '1') {
        this.$router.push({path: '/account'})
      } else if (index === '2') {
        this.$router.push({path: '/other'})
      }
    }
  }
}
</script>

<style scoped>
.setting {
  height: 100%;
  background-color: red;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-main {
  height: 100%;
  display: flex;
  flex: 1;
  min-height: 620px;
  background-color: gainsboro;
  padding: 0;
}
</style>
