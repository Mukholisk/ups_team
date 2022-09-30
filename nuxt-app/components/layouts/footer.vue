<template>
  <el-row class="h-full">
    <el-col
        :span="8"
        class="h-full flex justify-center items-center"
        @click="left"
    >
      <icon name="icon-location" :size="30"></icon>
    </el-col>
    <el-col
        :span="8"
        class="h-full flex justify-center items-center"
        @click="center"
    >
      <icon name="icon-refresh" :size="30"></icon>
    </el-col>
    <el-col
        :span="8"
        class="h-full flex justify-center items-center"
        @click="right"
    >
      <icon name="icon-user" :size="30"></icon>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import Icon from "../icon";

const left = () => {
  alert("123")
}

const center = () => {
  alert("456")
}

const right = () => {
  alert("789")
}

</script>

<style scoped>

</style>
