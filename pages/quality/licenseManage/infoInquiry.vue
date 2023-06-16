
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useMessage, NIcon, NButton } from "naive-ui";
</script>

<style scoped lang="scss">
.tableWrap {
  height: calc(100% - 64px);
  @apply flex flex-col bg-white w-full px-[16px];
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}
</style>
