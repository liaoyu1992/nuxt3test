
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
    
  </div>
</template>

<script setup lang="ts">
import { h, ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { NTooltip, NButton } from "naive-ui";
import { differenceInMonths } from "date-fns";
</script>

<style scoped lang="scss">
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}
</style>
