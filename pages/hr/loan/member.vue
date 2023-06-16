

<template>
  <div class="w-full h-full px-[16px] pt-16px bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive, provide } from "vue";
import { useI18n } from "vue-i18n";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  FormItemRule,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NCard,
  NGrid,
  NGi,
  NFormItemGi,
  NInputNumber,
  NModal,
  SelectOption,
  NCheckbox,
} from "naive-ui";

</script>
<style lang="scss" scoped>
.formInput {
  width: 400px;
}

:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
