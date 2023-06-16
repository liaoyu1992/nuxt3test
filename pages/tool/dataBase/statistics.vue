<template>
  <div class="w-full h-full px-[16px] pb-[0px] bg-[#f8f8f8]">
    
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  Component,
  watch,
  onMounted,
  reactive,
  toRaw,
  provide,
} from "vue";
import { useRouter } from "vue-router";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NPagination,
  NModal,
  NInput,
  NInputNumber,
  FormItemInst,
  FormItemRule,
  FormRules,
  NRadioGroup,
  NRadio,
  NUpload,
  UploadFileInfo,
  NDatePicker,
} from "naive-ui";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
:deep(.n-input.n-input--pair .n-input__separator) {
  /* background: #f2f3f5; */
}

:deep(.n-input .n-input-wrapper) {
  /* background-color: #F2F3F5; */
  width: 220px;
}

:deep(.n-base-selection .n-base-selection-tags) {
  /* background-color: #F2F3F5; */
  width: 220px;
}

:deep(.n-card>.n-card-header .n-card-header__main) {
  text-align: center;
}

:deep(.n-form-item.n-form-item--top-labelled .n-form-item-label) {
  margin-bottom: 0px;
  align-items: flex-end;
}

:deep(.n-card > .n-card-header) {
  padding: 15px 20px;
  text-align: center;
  font-weight: 400;
}

:deep(.n-card.n-card--content-soft-segmented > .n-card__content) {
  padding: 15px 0 !important;
}

:deep(.n-card.n-card--footer-soft-segmented>.n-card__footer) {
  padding: 15px;
}

:deep(.n-form-item .n-form-item-feedback-wrapper .n-form-item-feedback.n-form-item-feedback--error) {
  font-size: 13px;
}

.tableWrap {
  height: calc(100% - 186px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}
</style>
