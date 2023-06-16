<template>
  <div class="w-[100%] h-[100%]">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useMessage, NButton, } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
  @apply flex bg-white w-full h-full px-[16px] flex-col overflow-y-scroll;
}
.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}
.gridTable {
  flex: 1;
}
.paginat {
  flex: 0 0 50px;
}
</style>
