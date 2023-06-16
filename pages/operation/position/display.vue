
<template>
  <ClientOnly>
   
  </ClientOnly>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive, toRaw } from "vue";
import {
  NTabs,
  NTabPane,
  NPopover,
  FormInst,
  NModal,
  NForm,
  NFormItemGi,
  NGrid,
  NButton,
  NDatePicker,
  NInput,
  NSelect,
  NIcon,
  NPopconfirm,
  useMessage,
  useDialog,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { format, addDays } from "date-fns";
</script>
<style lang="scss" scoped>
.actualEnterTimeForm {
  @apply w-full;
}
</style>
