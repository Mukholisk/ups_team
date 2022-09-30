<template>
  <el-row class="h-1/2 w-full">

  </el-row>
  <el-row class="h-1/2 w-full">
    <el-form :model="form" label-width="120px" class="w-full mr-10">
      <el-form-item label="피드 제목">
        <el-input v-model="form.title" size="large"/>
      </el-form-item>
      <el-form-item label="피드 내용">
        <el-input v-model="form.content" size="large" type="textarea" :autosize="{ minRows: 10, maxRows: 10 }"/>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script setup lang="ts">

import {reactive} from "#imports";

const form = reactive({
  title: "",
  content: ""
})

</script>

<style scoped>

</style>
