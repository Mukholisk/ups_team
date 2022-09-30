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
          <slot/>
        </el-row>
        <el-row style="height: 33%">
          <div class="text-center w-full h-full">
            <el-row class="flex justify-center h-5/6 mt-4">
              <span class="block text-2xl">회원 가입</span>
            </el-row>
          </div>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row class="flex justify-center h-1/6">
          <span class="block text-2xl">이용약관 및 개인정보처리방침</span>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>

<style scoped>
.background {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
