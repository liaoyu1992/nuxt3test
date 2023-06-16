
<template>
  <div class="w-full h-full px-[16px] pb-[0px] pt-0 bg-[#f8f8f8]">

  </div>
</template>

<script lang="ts" setup>
import {ref, Component, watch, onMounted, reactive} from "vue";
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
import {useI18n} from "vue-i18n";
import {addMonths, format} from "date-fns";

</script>

<style scoped>
.gridTable {
  flex: 1;
}
</style>
