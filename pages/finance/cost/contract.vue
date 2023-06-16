

<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, } from "vue";
import {
  NIcon, FormInst, NForm, NFormItem, useMessage, NButton, NModal, useDialog,
  NInput, FormRules, NGi, NGrid, NDatePicker, NInputNumber
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
  flex: 1;
  @apply flex flex-col bg-white w-full px-[16px];
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}</style>
