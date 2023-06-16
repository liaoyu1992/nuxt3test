<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
   
  
  </div>
</template>
<script setup lang="ts">
import {
  NButton,
  NInput,
  NSelect,
  NForm,
  NFormItem,
  FormInst,
  NIcon,
} from "naive-ui";
import { ref, reactive, onMounted, toRaw } from "vue";
import { useI18n } from "vue-i18n";
</script>
<style scoped>
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
