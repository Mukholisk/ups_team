<template>
  <el-container class="background">
    <el-row class="h-full w-full">
      <el-col :span="4">

      </el-col>
      <el-col :span="16">
        <el-row
            class="flex justify-center items-center"
            style="height: 33%"
        >
          <el-image class="" style="height: 30%" src="https://khuups.s3.ap-northeast-2.amazonaws.com/ups_title1.png"
                    fit="contain"/>
        </el-row>
        <el-row style="height: 34%">
              <el-input v-model="form.account_id" size="large" placeholder="아이디" class="my-2.5"/>
              <el-input v-model="form.account_pw" size="large" placeholder="비밀번호" class="my-2.5"/>
              <el-input v-model="form.name" size="large" placeholder="이름" class="my-2.5"/>
              <el-input v-model="form.email" size="large" placeholder="이메일" class="my-2.5"/>
          <div class="text-right w-full h-full">
            <el-button size="large" class="w-full my-10" >제출</el-button>
          </div>
          <el-row style="height: 33%">

          </el-row>
        </el-row>

      </el-col>
      <el-col :span="4">

      </el-col>
    </el-row>
  </el-container>
</template>

<script setup lang="ts">

import {definePageMeta, reactive} from "#imports";

definePageMeta({
  layout: "none",
});

const form = reactive({
  account_id: "",
  account_pw: "",
  name: "",
  email: ""
})

</script>

<style scoped>
.background {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
