
<template>
  <div class="mainContainer">
   
  </div>
</template>

<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
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
  NTimePicker,
  NDatePicker,
  NCard,
  NGrid,
  NGi,
  NFormItemGi,
  NModal,
  NCheckbox,
  NInputNumber,
  NUpload,
  NUploadDragger,
  NText,
  NP,
  SelectOption,
  UploadCustomRequestOptions,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { addMonths, format } from "date-fns";
</script>

<style scoped>
.tableWrap {
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 400px;
}
</style>
