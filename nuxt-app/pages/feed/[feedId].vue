<template>
  <el-row
      style="height: 40%"
  >
    <el-image
        class="h-full"
        src="data:image/jpeg;base64,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"
        fit="contain"
    />
  </el-row>
  <el-row
      style="height: 5%"
      class="m-4 p-0"
  >
    <el-row class="h-full w-full m-0 p-0">
      <el-col :span="4">

      </el-col>
      <el-col :span="4">
        <emotions url="https://khuups.s3.ap-northeast-2.amazonaws.com/angry.png" :count="123"/>
      </el-col>
      <el-col :span="4">
        <emotions url="https://khuups.s3.ap-northeast-2.amazonaws.com/cry.png" :count="123"/>
      </el-col>
      <el-col :span="4">
        <emotions url="https://khuups.s3.ap-northeast-2.amazonaws.com/smile.png" :count="123"/>
      </el-col>
      <el-col :span="4">
        <emotions url="https://khuups.s3.ap-northeast-2.amazonaws.com/good.png" :count="123"/>
      </el-col>
      <el-col :span="4">
        <emotions url="https://khuups.s3.ap-northeast-2.amazonaws.com/bad.png" :count="123"/>
      </el-col>
    </el-row>
  </el-row>

  <el-row
      style="height: 22%"
      class="m-4"
  >
    <el-card class="h-full w-full">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </el-card>
  </el-row>
  <el-row
      style="height: 17%"
      class="m-4 h-full"
  >
    <el-card class="h-full w-full">
      <comment
          class="h-1/2 my-2.5"
          profile_url="https://cdn-lostark.game.onstove.com/2021/event/210324_landing/images/m/mokoko_01.gif"
          userName="김대선"
          comment="정말 멋있는 사진이네요"
      />
      <comment
          class="h-1/2 my-2.5"
          profile_url="https://cdn-lostark.game.onstove.com/2021/event/210324_landing/images/m/mokoko_01.gif"
          userName="김대선"
          comment="정말 멋있는 사진이네요"
      />
    </el-card>
  </el-row>
  <el-row
      style="height: 7%"
      class="m-4"
  >
    <el-card class="h-full w-full">
      <el-row>
        <el-col :span="20">
          <el-input size="large"></el-input>
        </el-col>
        <el-col :span="4" class="flex justify-center items-center">
          <icon name="icon-comment" :size="40"/>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>

<script setup lang="ts">

import {useRoute} from "#app";

const route = useRoute()



</script>

<style scoped>

</style>
