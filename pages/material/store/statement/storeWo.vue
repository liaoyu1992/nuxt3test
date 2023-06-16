
<template>
  <div class="w-full h-[100%] bg-[#f8f8f8] px-4px flex flex-col ">
    
  </div>
</template>
<script lang="ts" setup>
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
  NSpace,
} from "naive-ui";

import { useRouter, useRoute } from "vue-router";
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

.storeWoModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
