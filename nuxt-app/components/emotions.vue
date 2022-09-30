<template>
  <div class="flex justify-center items-center align-middle">
    <el-icon :size="40" class="mr-2">
      <el-image
          class="h-full"
          :src="url"
          fit="contain"
      />
    </el-icon>
    {{count}}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number,
  url: string
}>()
</script>

<style scoped>

</style>
