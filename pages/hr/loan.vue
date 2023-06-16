

<template>
  <div class="planasse">
    
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted, computed, } from "vue";
</script>

<style scoped>
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
  color: #165DFF;
}

.secTree {
  flex: 0 0 140px;
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

.centerMenu .active {
  @apply font-bold text-[#165DFF];
  background: #F2F3F5;
}

.subMenu {
  border-radius: 2px 2px 2px 2px;
  @apply mx-4px;
}

/* .returnPre {
  border-bottom: 1px solid #F2F3F5;
  @apply flex h-42px items-center pl-20px cursor-pointer mt-4px;
} */

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
