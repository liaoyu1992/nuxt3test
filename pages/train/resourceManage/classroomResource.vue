
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
   
  </div>
</template>
<script setup lang="ts">
import {
  NButton,
  NSpace,
  NInput,
  NSelect,
  NBreadcrumb,
  NBreadcrumbItem,
  NForm,
  NFormItem,
  NDatePicker,
  FormInst,
  NIcon,
  useMessage,
  NModal,
  NGrid,
  NGi,
  NCard,
  NRadioGroup,
  NRadio,
  FormRules,
  FormItemRule,
} from "naive-ui";
import {
  ref,
  reactive,
  onMounted,
  toRaw,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import { isTryStatement } from "@babel/types";

import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { number } from "echarts/core";
import { computed } from "@vue/reactivity";

</script>

<style scoped>
.tableWrap {
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}
</style>
