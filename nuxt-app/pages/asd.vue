<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary" size="large">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <el-row>
    <span class="text-3xl">{{ test }}</span>
  </el-row>
</template>

<script setup lang="ts">
import {useTestPiniaStore} from "~/stores/testPinia";
import {storeToRefs} from "pinia";

const a = useTestPiniaStore()

const {test} = storeToRefs(a)

setTimeout(
    () => {
      a.testTochange()
    },
    1000
)

</script>

