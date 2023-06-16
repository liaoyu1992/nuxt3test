

<template>
  <div class="fiIncomeType">
   
  </div>
</template>
<script setup lang="ts">
import { ref, Component, onMounted, reactive, } from "vue";
import { NTree, NIcon, FormInst, NForm, NFormItem, useMessage, NButton, NModal, NInput, NInputNumber,
  NCheckbox, FormRules, NRadioGroup, NRadio, NDatePicker, TreeOption, TreeDropInfo, useDialog } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style scoped lang="scss">
.fiIncomeType{
  @apply w-full h-full flex;
}
:deep(.n-tree .n-tree-node) {
    padding: 4px 0px;
    margin-left: 8px;
    margin-right: 8px;
}
:deep(.n-tree .n-tree-node-content) {
  display: table-row;
  z-index: 1;
}
:deep(.n-tree .n-tree-node-content .n-tree-node-content__text) {
  width: 145px;
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
:deep(.n-tree .n-tree-node-content .n-tree-node-content__suffix) {
  display: inline-block;
  padding-left: 10px;
  margin-right: 4px;
  position: absolute;
  top: 0px;
  right: -6px;
  z-index: 9999;
}
:deep(.n-tree .n-tree-node-switcher) {
  height: 20px;
  width: 20px;
}
.treeSide {
  flex: 0 0 280px;
  height: 100%;
  overflow-y: scroll;
}
.tableWrap {
  flex: 1;
  @apply px-16px flex flex-col;
}
.btnWrap{
  flex: 0 0 60px;
  @apply  h-60px flex justify-between items-center;
}
.gridTable {
  flex: 1;
}
.treeTip{
  position: absolute;
  bottom: 6px;
  left: 0;
}
</style>
