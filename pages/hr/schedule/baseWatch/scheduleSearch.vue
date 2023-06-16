

<template>
  <div class="mainContainer">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { FormInst, useMessage } from "naive-ui";
import {
  format, parseISO, startOfMonth, endOfMonth,
} from "date-fns";
import { computed } from "@vue/reactivity";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.gridTable {
  flex: 1;
}

.schedule-table {
  @apply table-fixed w-full;

  .cell-header {
    @apply bg-gray-100;
  }

  td {
    @apply p-[5px] min-w-[100px] border-1 text-center;
  }

  .weekend {
    @apply text-red-500;
  }

  .onDuty {
    @apply bg-green-500 text-white;
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
