
<template>
  <div class="mainContainer">
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, } from "vue";
import { NIcon, useMessage, NButton, } from "naive-ui";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
.searchPart{
  border-bottom: 1px solid #eee;
  @apply flex h-[64px] items-center justify-between;
}
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
}
.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}
.gridTable {
  flex: 1;
}
</style>
