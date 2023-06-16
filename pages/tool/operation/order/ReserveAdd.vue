
<template>
  <div class="h-full flex flex-col w-full">
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import {
  NButton,
  NIcon,
  NForm,
  NFormItem,
  NInput,
  NSpace,
  NRadioGroup,
  NRadio,
  NTabPane,
  NTabs,
  NDatePicker,
  useMessage,
  FormRules,
  FormInst,
  NGrid,
  NFormItemGi
} from "naive-ui";
import { useOrder } from "./useOrder";
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
:deep(.n-input--autosize) {
  width: 300px;
}

:deep(.n-input:not(.remark-class)) {
  width: 300px;
}

:deep(.n-tabs .n-tabs-pane-wrapper) {
  overflow: visible;
}
</style>
