

<template>
  <div class="w-full h-full p-[16px] pb-[0px] bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive, computed } from "vue";
import { useMessage, NButton, FormInst } from "naive-ui";
import { useI18n } from "vue-i18n";
import {
  format,
  addMonths,
  addWeeks,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  parseISO,
} from "date-fns";
</script>
<style lang="scss" scoped>
.weekPlanTable {
  @apply border-collapse;
  td {
    @apply border-black border-solid border-[1px];
  }
}

.divRight {
  float: right;
}
</style>
