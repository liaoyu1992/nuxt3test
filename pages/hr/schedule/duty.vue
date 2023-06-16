
<template>
  <div class="mainContainer">
    
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
  useMessage,
  NButton,
  NTimePicker,
  NGrid,
  NFormItemGi,
  NModal,
  NDatePicker,
  NUpload,
  NUploadDragger,
  NText,
  NP,
  SelectOption,
  UploadCustomRequestOptions,
} from "naive-ui";
import { format, addMonths } from "date-fns";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}
.gridTable {
  flex: 1;
}
.formInput {
  width: 300px;
}
.offdutyModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
