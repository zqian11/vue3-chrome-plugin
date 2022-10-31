<template>
  <div class="content_page">
    <!--<button @click="getDOM">操作DOM</button>-->
    <!--<button @click="getAnswer">校验</button>-->
    <button @click="sendMsg">send</button>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

console.log('hello script setup')
import {lib} from "@/database/lib"

onMounted(() => {
  console.log(lib)
  // setInterval(() => {
  //   getAnswer()
  // }, 1000)
// 接收来自popup的消息
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, 'request')
    if (request.type === "PToC") {
      let {className, multipleClassName} = request;
      console.log(className, multipleClassName)
      sendResponse("你好，我是contentscript，我收到了你的信息了~");
    }

  });

})

function getDOM() {
  $(".title").css({color: 'red'})
}

function getAnswer() {
  const search = document.querySelector('.title').innerHTML;
  if (!search) return false;
  let result = lib.filter(item => {
    const isTitle = item.title.includes(search) || search.includes(item.title)
    return isTitle
  })
  let answerDOM = document.querySelectorAll('p')
  let answer2index = {"A": 21, "B": 22, "C": 23, "D": 24}
  if (result.length <= 0) {
    console.log('未查询到题目信息');
  } else if (result.length === 1) {
    const {answer} = result[0], index = answer2index[answer];
    let dom = answerDOM[index].firstElementChild.firstElementChild;
    dom.style.color = 'blue'
  } else {
    console.log('查询到多个信息');
  }
}

function sendMsg() {
  chrome.runtime.sendMessage("data", function () {
    console.log("收到响应");
  });
}
</script>

<style lang="scss" scoped>
.content_page {
  position: fixed;
  z-index: 999;
  right: 10px;
  bottom: 10px;
}
</style>
