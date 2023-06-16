
<template>
  <div class="w-full h-full bg-[#f8f8f8]">
    
  </div>
</template>

<script setup lang="ts">
import {
  defineComponent,
  ref,
  Component,
  watch,
  onMounted,
  reactive,
  h,
  toRaw,
} from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  FormItemRule,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NCard,
  NGrid,
  NGi,
  NFormItemGi,
  NInputNumber,
  NModal,
  SelectOption,
  NCheckbox,
  MenuOption,
  NMenu,
  TreeOption,
  NTree,
  NSwitch,
  NDescriptions,
  NDescriptionsItem,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
}
.gridTable {
  flex: 1;
}
.formInput {
  width: 300px;
}

.shiftModalTitle {
  @apply font-500 text-18px text-center;
}
.matRepairModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
