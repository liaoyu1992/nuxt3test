
<template>
  <div class="mainContainer">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, computed } from "vue";
import {
  NIcon,
  NSelect,
  NInput,
  NInputNumber,
  NGrid,
  NDatePicker,
  FormInst,
  NForm,
  NFormItemGi,
  useMessage,
  NButton,
  NRadio,
  NRadioGroup,
  NSpace,
  NCard,
  NTabs,
  NTab,
  NScrollbar,
  useDialog,
  FormItemRule,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { format, parseISO, isAfter, differenceInDays, differenceInHours } from "date-fns";
</script>
<style lang="scss" scoped>
.formInput {
  width: 300px;
}

.repairAddressFormInput {
  width: 1545px;
}

.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}

.gridTable {
  flex: 1;
}

.btnWrap {
  @apply flex justify-between;
}

// 非CAAC提示
:deep(.n-form-item-feedback:not(.n-form-item-feedback--error)
    .n-form-item-feedback__line) {
  @apply text-blue-500;
}
</style>
