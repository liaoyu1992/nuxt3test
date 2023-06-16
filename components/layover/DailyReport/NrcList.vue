

<template>
  <table class="dailyReportTable text-center">
    <tbody>
      <tr>
        <td colspan="7" class="text-lg text-left font-bold">
          
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        
      </tr>
      
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from "vue";

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
