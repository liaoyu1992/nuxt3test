
<template>
  <div class="execut">
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, } from "vue";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { format, addMonths } from "date-fns";

</script>

<style scoped>
.execut {
  @apply w-full h-full p-[16px] pb-[0px] bg-[#f8f8f8];
}

.tableWrap {
  flex: 1;
  @apply flex flex-col bg-white w-full px-[16px];
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}

.iconText {
  @apply flex items-center;
}

.filterBtn {
  @apply text-blue-700 inline-block w-[32px] text-14px;
}

:deep(.ag-theme-alpine) {
  min-height: 200px !important;
}

:deep(.aggridWarp) {
  min-height: 200px !important;
}

:deep(.n-upload-trigger+.n-upload-file-list) {
  margin-top: 0px;
}

/* .execut::-webkit-scrollbar {
  width: 2px;
}
.execut::-webkit-scrollbar-track {
  background-color: #eeeeee;
}
.execut::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(171, 171, 171, 0.3);
} */
</style>
