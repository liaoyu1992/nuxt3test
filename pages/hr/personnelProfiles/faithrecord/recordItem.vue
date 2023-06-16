<template>
  <div class="w-full h-full p-16px pt-0px pb-0px pl-0px bg-[#f8f8f8]">
  </div>
</template>
<script setup lang="ts">
import {
  NButton,
  NSelect,
  NForm,
  NFormItem,
  FormInst,
  NIcon,
  useMessage,
  NModal,
  FormRules,
  FormItemRule,
  NTooltip,
  SelectOption,
  NFormItemGi,
  NGrid,
  NDatePicker
} from "naive-ui";
import { ref, reactive, onMounted, toRaw, VNode, h } from "vue";
import { useI18n } from "vue-i18n";
</script>
<style scoped>
.gridTable {
  flex: 1;
}
</style>
