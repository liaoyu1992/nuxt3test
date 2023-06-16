<template>
  <div class="w-full h-full bg-[#f8f8f8] p-16px pb-0px">
    
  </div>
</template>
<script setup lang="ts" >
import { ref, watch, onMounted, reactive, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NSelect, NInput, NGrid, NDatePicker, FormInst, NForm, NFormItem, NRadioGroup, NRadio,
  NModal, NFormItemGi, FormItemRule, useMessage, NButton, SelectOption, NTabs, NTabPane, NPopconfirm } from "naive-ui";
import { useI18n } from "vue-i18n";
import { format } from "date-fns";

</script>
<style lang="scss" scoped>
.formInput {
  width: 300px;
}
.titleName{
  border-left: 2px solid #1a84fc;
  padding-left: 8px;
  font-weight: 600;
}
.gridTable {
  flex: 1;
}
.topFixed{
  @apply flex h-[64px] justify-between pt-14px mx-20px pr-20px;
  border-bottom: 1px solid #eee;
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 100;
}
.bottomFixed{
  @apply flex justify-end px-16px py-10px;
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  border-top: 1px solid rgb(243, 241, 241);
  z-index: 100;
  /* background-color: #f8f8f8; */
}
.formWrap{
  position: relative;
  width: 100%;
  height: 100%;
  border-top: 1px solid rgb(239, 239, 245);
}
.pageBack{
  position: absolute;
  top: 15px;
  left: 16px;
  /* border-bottom: 1px solid rgb(239, 239, 245); */
  @apply w-80px h-42px flex items-center pl-20px z-500 box-border;
}
.backText{
  @apply inline-block ml-2px text-12px pr-14px py-8px cursor-pointer;
}
.backText:hover{
  color: #1a84fc;
}
:deep(.n-tabs .n-tabs-pane-wrapper) {
  height: calc(100% - 42px);
}
:deep(.n-tabs .n-tab-pane){
  height: 100%;
}
:deep(.n-tabs .n-tabs-wrapper){
  padding: 0 16px;
}
:deep(.n-tabs .n-tabs-nav-scroll-wrapper) {
    padding-left: 78px;
}
:deep(.n-tabs .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav-scroll-content) {
  border-bottom: none;
}
</style>
