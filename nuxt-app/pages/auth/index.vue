<template>
  <el-divider class="border-2 border-gray-400">
          <span class="text-xl text-gray-500">
            계정 연결
          </span>
  </el-divider>
  <div class="mx-0">
    <el-button class="w-full my-2" style="padding-top: 35px; padding-bottom: 35px; margin-left: 0px" size="large"
               color="#F7E600" round>
          <span class="text-2xl">
            카카오 아이디로 로그인
          </span>
    </el-button>
    <el-button class="w-full my-2" style="padding-top: 35px; padding-bottom: 35px; margin-left: 0px" size="large"
               color="#00C73C" round>
          <span class="text-2xl">
            네이버 아이디로 로그인
          </span>
    </el-button>
    <el-button class="w-full my-2" style="padding-top: 35px; padding-bottom: 35px; margin-left: 0px" size="large"
               color="#3b5998" round>
          <span class="text-2xl">
            페이스북 아이디로 로그인
          </span>
    </el-button>
    <el-button class="w-full my-2 py-10" style="padding-top: 35px; padding-bottom: 35px; margin-left: 0px" size="large"
               color="#000000" round>
          <span class="text-2xl">
            UPS 아이디로 로그인
          </span>
    </el-button>
  </div>
  <el-divider class="border-2 border-gray-400">
          <span class="text-xl text-gray-500">
            또는
          </span>
  </el-divider>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: "white",
});
</script>

<style scoped>

</style>
