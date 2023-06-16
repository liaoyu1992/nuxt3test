
<template>
  <div class="mainContainer">
    
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
import { format, addMonths, lastDayOfMonth } from "date-fns";
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
  width: 400px;
}

.forklistModalTitle {
  @apply font-500 text-18px text-center;
}
</style>
