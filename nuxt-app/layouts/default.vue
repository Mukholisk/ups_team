<template>
  <div style="margin: 0">
    <el-container class="wrapper">
      <el-header>
        <layouts-header/>
      </el-header>
      <el-main>
        <slot/>
      </el-main>
      <el-footer>
        <layouts-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
  position: relative;
}

.el-header {
  padding: 0;
  margin: 0;
  z-index: 10;
  position: fixed;
  height: 5%;
  top: 0;
  left: 0;
  width: 100%;
}

.el-main {
  width: 100%;
  height: 90%;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 5%;
  z-index: 0;
}

.el-footer {
  padding: 0;
  margin: 0;
  z-index: 10;
  position: fixed;
  height: 5%;
  top: 95%;
  left: 0;
  width: 100%;
}
</style>
