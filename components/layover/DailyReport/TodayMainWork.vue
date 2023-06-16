

<template>
  <table class="dailyReportTable text-center">
    <tbody>
     
     <tr>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
   </tbody>
  </table>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from "vue";
import { NGrid, NForm, NFormItemGi, useMessage, NButton, NModal, NSelect, NInputNumber, } from "naive-ui";

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
    @apply !border-none;
  }
}
</style>
