
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
    
  </div>
</template>

<script setup lang="ts">
import { VNode, h, ref, reactive, onMounted, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import {
  NButton,
  NSelect,
  NForm,
  NFormItem,
  NIcon,
  useMessage,
  SelectOption,
  NTooltip,
} from "naive-ui";
</script>

<style scoped lang="scss">
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}
.btnWrap {
  flex: 0 0 60px;
}
</style>
