
<template>
  <div class="w-[100%] h-[100%]">
   
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
  NRow,
  NCol,
  NTabs,
  NTabPane,
  NInputNumber,
  FormItemInst,
  FormRules,
  FormItemRule,
  NRadioGroup,
  NRadio,
  NGi,
  NGrid,
  NDatePicker,
} from "naive-ui";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";

</script>
<style scoped>
.tableWrap {
  height: calc(100% - 70px);
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

.searchBtn {
  padding: 4px 16px 4px 16px;
  color: #4e5969;
  background: #f0f0f0;
  border-radius: 16px;
  cursor: pointer;
}

.notAllowed {
  cursor: not-allowed;
}

.searchBtn:hover {
  background: #e7e7e7;
}

.currentBtn {
  background: #2080f0;
  color: #fff;
}

.currentBtn:hover {
  background: #4696f0;
}
</style>
