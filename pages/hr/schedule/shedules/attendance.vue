

<template>
  <div class="w-full h-full p-[16px] pb-[0px] bg-[#f8f8f8] flex flex-col">
    
      
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive, VNodeChild } from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NInput,
  NGrid,
  NFormItemGi,
  NInputNumber,
  NModal,
  NCheckbox,
  SelectOption,
  NSpace,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-16px;
  flex: 1;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.attendanceGroupModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
