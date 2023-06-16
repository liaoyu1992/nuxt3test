
<template>
  <div class="bg-white pt-[16px] pb-[16px]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { NButton } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style lang="scss" scoped>
.table {
  @apply w-full table-fixed text-center;
  .cell-header {
    @apply font-bold;
  }
  td {
    @apply border-1 p-[5px];
  }
}
</style>
