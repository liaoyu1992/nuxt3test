

<template>
  <div class="w-full h-full px-[16px] pt-16px bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted, provide } from "vue";
import { useI18n } from "vue-i18n";
import { NIcon, FormInst, useMessage, NButton, } from "naive-ui";
</script>
<style lang="scss" scoped>
.formInput {
  width: 400px;
}

:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
