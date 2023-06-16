<template>
  <div class="flex flex-col h-full w-full">
    
  </div>
</template>

<script setup>
import  { NButton, NInput, NInputNumber } from "naive-ui"
import { onMounted, ref, getCurrentInstance } from "vue";
import { hiprint } from "vue-plugin-hiprint";

</script>

<style>
.rect-printElement-types .hiprint-printElement-type > li > ul > li > a {
  color: black !important;
}
.custom-style-types .hiprint-printElement-type {
  display: block;
}
.custom-style-types .hiprint-printElement-type {
  padding: 0 0 0 0;
  list-style: none;
}
.custom-style-types .hiprint-printElement-type > li > .title {
  display: block;
  padding: 4px 0px;
  color: black;
  clear: both;
}
.custom-style-types .hiprint-printElement-type > li > ul {
  padding: 0 0 0 0;
  display: block;
  list-style: none;
}
.custom-style-types .hiprint-printElement-type > li > ul > li {
  display: block;
  width: 50%;
  float: left;
  max-width: 100px;
}
.custom-style-types .hiprint-printElement-type > li > ul > li > a {
  padding: 12px 6px;
  color: #1296db;
  text-decoration: none;
  background: #fff;
  border: 1px solid #ddd;
  margin-right: 5px;
  width: 95%;
  max-width: 100px;
  display: inline-block;
  text-align: center;
  margin-bottom: 7px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
}
</style>

<style scoped>
/* api按钮 */
.api {
  background: #00acc1;
}
.auto {
  width: auto !important;
}
/* 纸张 */
.paper {
  margin-right: 10px;
}
.paper button:not(class*="auto") {
  width: 60px !important;
}
/* 多个 button 间距 */
.paper button + button {
  margin-left: -1px;
}
.paper button:first-child:last-child {
  border-radius: 4px;
}
/* 两边的 btn 圆角 */
.paper button:first-child:not(:last-child) {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.paper button:last-child:not(:first-child) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.popover {
  position: absolute;
  margin-top: 10px;
  z-index: 10;
}
.popover .popover-content {
  background: white;
  border-radius: 4px;
  padding: 10px 14px;
  box-shadow: 2px 2px 2px 4px rgb(128 0 128 / 20%);
}
.popover .input {
  height: 24px;
  padding: 2px 4px;
}
.popover .input:hover {
  border-color: rgb(245, 155, 241);
  border-radius: 4px;
}
/* 区域 */
.left {
  background: white;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  box-shadow: 2px 2px 2px 0px rgb(128 0 128 / 20%);
  overflow: auto;
}
.container {
  height: 50%;
  overflow: auto;
  padding: 0 10%;
  background: rgb(245, 155, 241);
}
.container[id*="provider-container2"] {
  margin-top: 5px;
  background: rgb(209, 120, 239);
}
.center {
  margin: 0 10px;
  background: white;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  box-shadow: 2px 2px 2px 0px rgb(128 0 128 / 20%);
  overflow: auto;
}
.right {
  background: white;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  padding: 10px 0;
  box-shadow: 2px 2px 2px 0px rgb(128 0 128 / 20%);
  overflow: auto;
}
/* 左侧拖拽元素样式 */
.title {
  font-size: 16px;
  font-weight: 500;
  margin: 4px 0 4px 10px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 4px 10px;
  margin: 10px 8px 4px 8px;
  width: 38%;
  min-height: 60px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(171, 171, 171, 0.2);
}
.item .iconfont {
  font-size: 1.5rem;
}
.item span {
  font-size: 14px;
}
</style>
