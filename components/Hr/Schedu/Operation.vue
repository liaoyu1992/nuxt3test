

<template>
  <div>
    <sub-drawer>
    
    </sub-drawer>
    <hr-schedu-edit-person ></hr-schedu-edit-person>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, toRaw, } from "vue";
import { useMessage, NButton, } from "naive-ui";
import { format, addDays, compareAsc, parseISO, getDay, } from "date-fns";
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
