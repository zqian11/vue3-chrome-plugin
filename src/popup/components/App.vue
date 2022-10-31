<template>
  <div className="popup_page">
    this is popup page
    <div className="popup_page_main">
      this is popup page main
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  console.log('init')
})
</script>

<style lang="scss" scoped>
.popup_page {
  width: 200px;
  color: red;

  .popup_page_main {
    color: green;
  }
}
</style>
