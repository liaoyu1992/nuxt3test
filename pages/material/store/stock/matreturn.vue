<template>
  <div class="w-full h-full p-16px pt-0px pb-0px pl-0px bg-[#f8f8f8]">
 
  </div>

</template>

<script setup lang="ts">
import { ref, Component, watch, onMounted, reactive } from "vue";
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
  NTimePicker,
  NCard,
  NGrid,
  NGi,
  NFormItemGi,
  NInputNumber,
  NRadio,
  NRadioGroup,
  NRadioButton,
  NModal,
  SelectOption,
  NDatePicker,
  NCheckbox,
  UploadCustomRequestOptions,
  NUpload,
  UploadInst

} from "naive-ui";
import { get } from "lodash";

</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.returnModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
