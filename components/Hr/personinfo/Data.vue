
<template>
  <div>

  </div>
</template>
<script setup lang="ts">
import {
  NModal,
  NGrid,
  NGi,
  NCard,
  NButton,
  NSpace,
  NInput,
  NSelect,
  NForm,
  NIcon,
  NFormItem,
  NRadioGroup,
  NRadio,
  NCheckbox,
  FormRules,
  FormInst,
  FormItemRule,
  useMessage,
  NUpload,
  UploadFileInfo,
  UploadCustomRequestOptions,
  NDatePicker,
  NTooltip,
  NFormItemGi,
  SelectOption
} from "naive-ui";
import { ref, reactive, onMounted, toRaw, VNodeChild, h } from "vue";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.nGridStyle {
  @apply border-b-1px border-solid border-b-zinc-100 my-10px
}

.textColor {
  @apply text-blue-500
}

.divWith {
  @apply w-160px
}
</style>
