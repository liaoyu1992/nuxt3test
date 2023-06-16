<template>
  <div class="w-full h-full p-16px pt-0px pb-0px pl-0px bg-[#f8f8f8]">
    
  </div>
</template>
<script setup lang="ts">
import {
  NButton,
  NForm,
  FormInst,
  NModal,
  NGrid,
  FormRules,
  FormItemRule,
  NFormItemGi,
  useMessage,
  NInput,
  NCheckbox
} from "naive-ui";
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";
</script>
<style scoped>
.gridTable {
  flex: 1;
}
</style>
