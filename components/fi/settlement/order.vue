
<template>
  <div class="subTableWrap" >
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, reactive, } from "vue";
import {
  NIcon, NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NModal, NInput, NInputNumber,
  FormRules, NGi, NGrid, NUpload, NDatePicker, UploadCustomRequestOptions, UploadInst, NTreeSelect, NCheckbox, FormItemRule,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style>
.subTableWrap {
  @apply w-full h-full flex flex-col;
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}

.formRemark .formInput {
  width: 845px;
}

.sliceBtn>span:first-child {
  border-right: 0;
}

.sliceTab {
  border: 1px solid #666;
  cursor: pointer;
}

.sliceActive {
  background-color: #4696f0;
  color: #fff;
}

.poItemTable {
  flex: 1;
}
</style>
