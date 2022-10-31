<template>
  <div class="popup_page">
    <!-- 1 -->
    <div class="item">
      <label for="title">请输入题目的唯一类名</label>
      <input id="title" type="text" v-model="className">
    </div>
    <!-- 2 -->
    <div class="item">
      <label for="multipleClass">请输入多选项的公共类名</label>
      <input id="multipleClass" type="text" v-model="multipleClassName">
    </div>
    <!-- 3 -->
    <div class="item">
      <label for="multipleClass">辅助方式</label>
      <input type="checkbox" value="1" v-model="multipleClassName">辅助标红
      <input type="checkbox" value="2" v-model="multipleClassName">辅助选择（测试阶段）
    </div>
    <!-- 4 -->
    <div class="item">
      <label for="multipleClass">触发方式</label>
      <input type="checkbox" value="1" v-model="multipleClassName">手动识别
      <input type="checkbox" value="2" v-model="multipleClassName">定时执行
    </div>
    <div class="item">
      <button @click="save">SAVE</button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const className = ref('');
const multipleClassName = ref('');
onMounted(() => {
  console.log('init')
})

function save() {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    const tabId = tabs[0].id, data = {
      type: "PToC",
      className: className.value,
      multipleClassName: multipleClassName.value
    };
    chrome.tabs.sendMessage(tabId, data, function (response) {
      cosnole.log("收到来自content-script的回复：" + response);
    });
  })
}
</script>

<style lang="scss" scoped>
.popup_page {
  width: 200px;

  .item {
    margin: 10px 0;
  }
}
</style>
