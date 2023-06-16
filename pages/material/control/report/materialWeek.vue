
<template>
 <div class="w-full h-full bg-[#f8f8f8]">
    
  </div>
</template>

<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  FormItemRule,
  useMessage,
  NButton,
  NInput,
  NTimePicker,
  NDatePicker,
  NCard,
  NGrid,
  NGi,
  NFormItemGi,
  NModal,
  SelectOption,
  NCheckbox,
  NInputNumber,
  NDataTable,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import {
  format,
  compareAsc,
  parseISO,
  differenceInDays,
  addDays,
  startOfYear,
  differenceInWeeks,
  getYear,
  addWeeks,
  startOfWeek,
} from "date-fns";
</script>

<style scoped>
.gridTable {
  flex: 1;
}
</style>

