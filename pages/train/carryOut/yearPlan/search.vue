
<template>
  <div class="pl-16px pr-16px w-full pt-8px bg-light-400">
   
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
  NSpin,
  useMessage,
  NModal,
  NGrid,
  NGi,
  NCard,
  NRadioGroup,
  NRadio,
  FormRules,
  FormItemRule,
  NPopconfirm,
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
.base-place {
  width: 144px;
  height: 34px;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 0.375rem;
}
</style>
