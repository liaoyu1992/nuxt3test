
<template>
  <div class="w-full h-full p-[16px] bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { NDatePicker, FormInst, NForm, NFormItem, NSpin } from "naive-ui";
import { useI18n } from "vue-i18n";
import { format } from "date-fns";
</script>
<style lang="scss" scoped>
.dailyReportTable {
  @apply table-fixed w-full mt-[16px];

  .blankTd {
    height: 32px !important;
  }

  td {
    @apply border-1 border-black p-[5px];
  }
}
</style>
