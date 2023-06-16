
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
  NRadioGroup,
  NRadio,
  NProgress,
  useDialog,
} from "naive-ui";
import { stringLiteral } from "@babel/types";
import { format, addMonths, lastDayOfMonth } from "date-fns";
import { multiply } from "lodash";
</script>

<style lang="scss" scoped>
.receive {
  @apply w-full h-full p-[16px] pb-[0px] bg-[#f8f8f8];
}

.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}

.btnWrap {
  @apply flex justify-between items-center;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.ReceiveModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
