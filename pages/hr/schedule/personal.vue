
<template>
  <div class="mainContainer">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NDatePicker,
} from "naive-ui";
import {
  format,
  addDays,
  compareAsc,
  parseISO,
  getDay,
  getDate,
  getWeek,
  differenceInWeeks,
  getMonth,
} from "date-fns";
import { computed } from "@vue/reactivity";
</script>
<style lang="scss" scoped>
.schedule-table {
  @apply table-fixed w-full;
  .cell-header {
    @apply bg-gray-100;
  }
  .day-cell {
    @apply hover:(scale-100);
  }
  td {
    @apply p-[5px] min-w-[100px];
  }
  .onDuty {
    @apply bg-green-500 text-white;
    // @apply text-white bg-gradient-to-r from-green-500 to-yellow-500;
  }
  .rest {
    @apply bg-red-500 text-white;
  }
  .vacation {
    @apply bg-red-500 text-white;
  }
  .train {
    @apply bg-yellow-500 text-white;
  }
  .companyDuty {
    @apply bg-blue-700 text-white;
  }
  .baseDuty {
    @apply bg-blue-500 text-white;
  }
}
</style>
