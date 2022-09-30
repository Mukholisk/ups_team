<template>
  <el-icon :size="size">
    <component :is="name"/>
  </el-icon>
</template>

<script setup lang='ts'>

defineProps<{
  name: string,
  size: number
}>()

</script>
