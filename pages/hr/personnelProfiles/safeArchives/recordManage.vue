<template>
  <div class="w-full h-full p-16px pt-0px pb-0px pl-0px bg-[#f8f8f8]">
    
  </div>
</template>
<script setup lang="ts">
import {
  NButton,
  NSelect,
  NDatePicker,
  NIcon,
  useMessage,
  NModal,
  NGrid,
  FormRules,
  FormItemRule,
  NTooltip,
  SelectOption,
  NFormItemGi,
  NForm
} from "naive-ui";
import { ref, reactive, onMounted, toRaw, VNode, h } from "vue";
import { useI18n } from "vue-i18n";
</script>
<style scoped>
.gridTable {
  flex: 1;
}
</style>
