<template>
  <div class="w-full">
    <el-input class="text-xl mt-10 mb-1" placeholder="Id" size="large" v-model="id"/>
    <el-input class="text-xl mb-10" placeholder="Password" size="large" v-model="password"/>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "../../.nuxt/imports";
import {ref} from "@vue/reactivity";

const id = ref("")
const password = ref("")

definePageMeta({
  layout: "white",
});
</script>

<style scoped>

</style>
