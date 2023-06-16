
<template>
  <sub-drawer ref="subDrawerRef" >
  
    <workflow-approve-modal  />
  </sub-drawer>
</template>
<script lang="ts" setup>
import {
  ref,
  defineAsyncComponent,
  shallowRef,
  onMounted,
  computed,
  h,
} from "vue";
import { NButton, NTimeline, NTimelineItem, NScrollbar } from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.btnGroup {
  @apply flex justify-end items-center py-[16px] h-[70px];
  border-bottom: #eee 1px solid;
}

.menuBtn {
  @apply text-lg py-[9px] h-[40px] w-full pl-[16px] cursor-pointer hover: (bg-blue-500 text-white);
}

.menuBtn.active {
  @apply bg-[#f2f3f5] text-blue-500 hover: (bg-blue-500 text-white);
}

.taskInfoTable {
  table-layout: fixed;
  border-spacing: 0;
  width: 100%;

  .taskInfoLabel {
    text-align: right;
    width: 150px;
  }

  .taskInfoValue {
    text-align: left;
    padding-left: 16px;
  }
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background-color: #eeeeee;
}

::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(171, 171, 171, 0.3);
}
</style>
