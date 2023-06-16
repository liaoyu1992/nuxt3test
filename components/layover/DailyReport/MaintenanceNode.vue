
<template>
  <table class="dailyReportTable text-center">

  </table>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive, watchEffect } from "vue";
import { NInput, NGrid, NForm, NFormItemGi, useMessage, NButton, NModal, } from "naive-ui";

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
