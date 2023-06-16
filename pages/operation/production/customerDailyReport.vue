
<template>
  <div class="w-full h-full p-[16px] pb-0 bg-[#f8f8f8] flex flex-col overflow-y-hidden">
    
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import {
  useMessage,
  NButton,
  NTabs,
  NTab,
  NPopover,
  NDatePicker,
  NProgress
} from "naive-ui";
</script>

<style scoped>
.progress {
  /* background-color: #0062CC; */
  overflow: hidden;
  z-index: 999999999;
  position: fixed;
  width: 50%;
  height: 10%;
  right: 50%;
  margin-right: -25%;
  top: 60%;
  margin-top: -25%;
  text-align: center;
}

:deep(.n-tabs .n-tabs-pane-wrapper) {
  height: calc(100% - 42px) !important;
}

.planasse {
  @apply w-full h-full p-[16px] pb-0 bg-[#f8f8f8] flex overflow-y-scroll;
}

.topAcReg {
  @apply inline-block text-14px font-500 mr-4px;
}

.topAcReg:hover {
  color: #165dff;
}

.secTree {
  flex: 0 0 170px;
  @apply bg-white mr-5px;
}

.pageSide {
  flex: 1;
  @apply bg-white;
}

.centerMenu {
  @apply list-none rounded pl-0px;
}

.centerMenu li {
  @apply pl-16px text-sm cursor-pointer h-40px flex items-center hover: (bg-blue-50);
}

.centerMenu li>div {
  @apply font-400;
}

.topMenu {
  @apply flex list-none rounded pl-0px flex-wrap;
}

.topMenu li {
  @apply px-8px text-sm cursor-pointer h-40px flex items-center hover: (bg-blue-50);
}

.topMenu li>div {
  @apply font-400;
}



.topMenu .unApprove {
  @apply font-bold text-[#ff0036];
  /* background: #f2f3f5; */
}

.centerMenu .unApprove {
  @apply font-bold text-[#ff0036];
  /* background: #f2f3f5; */
}

.centerMenu .active {
  @apply font-bold;
  background: #f2f3f5;
}

.topMenu .active {
  @apply font-bold;
  background: #f2f3f5;
}

.topMenuList {
  border-radius: 2px 2px 2px 2px;
  @apply mx-4px;
}

.subMenu {
  border-radius: 2px 2px 2px 2px;
  @apply mx-4px;
}

.returnPre {
  border-bottom: 1px solid #f2f3f5;
  @apply flex h-42px items-center pl-20px cursor-pointer mt-4px;
}

.planasse::-webkit-scrollbar {
  width: 2px;
}

.planasse::-webkit-scrollbar-track {
  background-color: #eeeeee;
}

.planasse::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(171, 171, 171, 0.3);
}
</style>
