
<template>
  <div class="w-full h-full p-[16px] bg-[#f8f8f8]">
   
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NDatePicker,
  SelectOption,
} from "naive-ui";
import { format, addDays } from "date-fns";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}
.gridTable {
  flex: 1;
}
.formInput {
  width: 300px;
}
.attendanceRecordModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
