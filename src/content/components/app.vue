<template>
  <div class="content_page">
    <button @click="getDOM">操作DOM</button>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  console.log('hello script setup!')
})

function getDOM() {
  $(".title").css({color: 'red'})
}
</script>

<style lang="scss" scoped>
.content_page {
  position: fixed;
  z-index: 9999;
  right: 10px;
  bottom: 10px;
}
</style>
