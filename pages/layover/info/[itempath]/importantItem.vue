<template>
  <div class="mainContainer">

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { FormInst, useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style lang="scss" scoped>
.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}

.btnWrap {
  flex: 0 0 66px;
}

.gridTable {
  flex: 1;
}

.details-table {
  @apply w-full border-collapse table-fixed;

  .cell-header {
    @apply font-bold bg-gray-100;
  }

  td {
    @apply p-[5px];
  }
}
</style>
