
<template>
  <div class="w-full h-full bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { useMessage, FormInst, NSelect } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style lang="scss" scoped>
.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}

.gridTable {
  flex: 1;
}
</style>
