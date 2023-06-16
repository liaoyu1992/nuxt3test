
<template>
  <div class="mainContainer">
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NRadioGroup,
  NRadio,
  NRadioButton,
  NGrid,
  NUpload,
  NUploadDragger,
  NCheckbox,
  NFormItemGi,
  NLayout,
  NList,
  NTag,
  NListItem,
  NThing,
  NModal,
  NSteps,
  NStep,
  NSpace,
  NTransfer,
  UploadCustomRequestOptions,
  StepsProps,
  NPopselect,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { addDays, format } from "date-fns";
</script>

<style scoped>
.gridTable {
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}
</style>
