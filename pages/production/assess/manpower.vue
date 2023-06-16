<template>
  <div class="w-full h-full px-[16px] pb-[0px] bg-[#f8f8f8]">
    
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, } from "vue";
import { NIcon, NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NInput, FormRules, NDatePicker,} from "naive-ui";
</script>

<style scoped>
:deep(.n-input.n-input--pair .n-input__separator) {
    /* background: #f2f3f5; */
}
:deep(.daterange .n-input .n-input-wrapper) {
  width: 150px;
  padding-right: 8px;
  padding-left: 8px;
}
:deep(.n-input .n-input-wrapper) {
  /* background-color: #F2F3F5; */
  width: 220px;
  border-radius: 6px;
}
:deep(.n-base-selection .n-base-selection-tags) {
  /* background-color: #F2F3F5; */
  width: 220px;
  border-radius: 6px;
}
:deep(.n-card > .n-card-header .n-card-header__main) {
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
</style>
