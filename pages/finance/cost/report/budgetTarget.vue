<!--
 * @Description: 财务管理-预算目标情况
 * @version:
 * @Author: lxy
 * @Date: 2023-05-23 17:10:58
 * @LastEditTime: 2023-06-07 10:27:37
-->
<template>
  <div class="w-full h-full flex flex-col">
   

  </div>
</template>

<script setup lang="ts">

import { ref, Component, onMounted, reactive,} from "vue";
import {  NIcon, NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NModal, NDatePicker,
  NDataTable, NInput, NTabs, NTabPane,} from "naive-ui";
import { useI18n } from "vue-i18n";

import { format, startOfMonth, endOfMonth, startOfDay, endOfDay, startOfWeek, endOfWeek } from "date-fns";
</script>

<style scoped>
.tableWrap {
  /* height: calc(100% - 70px); */
  flex: 1;
  @apply  flex bg-white w-full px-[16px] flex-col;
}
.btnWrap {
  flex: 0 0 60px;
}
.gridTable {
  flex: 1;
}
:deep(.n-carousel .n-carousel__arrow svg) {
  color: #666;
  border-radius: 5px;
}
:deep(.n-carousel__arrow--disabled){
  color: #eee;
}
</style>

