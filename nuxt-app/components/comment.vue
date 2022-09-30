<template>
  <el-row class="flex justify-center items-center align-middle">
    <el-col :span="4">
      <el-avatar
          shape="circle"
          :size="'large'"
          :src="profile_url"
      />
    </el-col>
    <el-col :span="4">
      {{ userName }}
    </el-col>
    <el-col :span="16">
      {{ comment }}
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
defineProps<{
  profile_url: string,
  userName: string,
  comment: string
}>()
</script>

<style scoped>

</style>
