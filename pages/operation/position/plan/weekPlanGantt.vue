<template>
  <n-layout class="p-[16px] bg-[#f8f8f8]">
    
  </n-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import {
  NIcon,
  NButton,
  NForm,
  NGrid,
  NFormItemGi,
  NDatePicker,
  NSelect,
  NSpin,
  FormInst,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NModal,
  NPopover,
  useMessage,
  useDialog,
  NSwitch,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import {
  addDays,
  addWeeks,
  format,
  startOfWeek,
  endOfWeek,
  parseISO,
  compareAsc,
  differenceInDays,
  getDay,
} from "date-fns";
</script>

<style scoped>
.tableWrap {
  @apply w-full h-full;
}
.gridTable {
  @apply w-full h-full;
}
.formInput {
  width: 300px;
}
</style>
