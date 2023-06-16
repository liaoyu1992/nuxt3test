

<template>
  <table class="dailyReportTable text-center">
  

   
  </table>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watchEffect } from "vue";
import {
  NDatePicker,
  NInput,
  NGrid,
  FormInst,
  NForm,
  NFormItemGi,
  useMessage,
  NButton,
  NModal,
  NSelect,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.cell-header-bg {
  @apply font-bold bg-blue-400;
}

.dailyReportTable {
  @apply table-fixed w-full mt-[16px];

  td {
    @apply border-1 border-black p-[5px];
  }

  .cell-button {
    @apply !border-none w-[100px];
  }
}
</style>
