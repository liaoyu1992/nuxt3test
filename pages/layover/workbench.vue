
<template>
  <div class="w-full h-full p-[16px] bg-[#f7f8fa]">
  
  </div>
</template>
<script lang="ts" setup>
import {ref, reactive, Component, watch, onMounted} from "vue";
import {
  NCard,
  NButton,
  NTab,
  NTabs,
  NGrid,
  NGridItem,
  NSelect,
  NInput,
  NInputGroup,
  NIcon,
  NPopselect,
  NNumberAnimation,
  NPagination,
  NDropdown,
  useMessage,
  useDialog,
  FormInst,
  FormItemRule,
  NModal,
  NDatePicker,
  NForm,
  NFormItem,
} from "naive-ui";
import {useI18n} from "vue-i18n";
import {format, parse} from "date-fns";
</script>
<style lang="scss" scoped>
.acCard {
  @apply h-[180px] p-[10px] text-lg ring-1 ring-gray-50 cursor-pointer bg-white hover: (border-blue-500 border-2);
}

.acCard .C_CHECK {
  @apply text-xl text-center w-[60px] flex items-center justify-center;
}

.acCard .A_CHECK {
  @apply text-xl text-center w-[60px] flex items-center justify-center;
}

.acCard .SPECIAL_CHECK {
  @apply border-yellow-500 border-1 text-xl text-yellow-500 text-center bg-yellow-50 w-[60px] flex items-center justify-center;
}

.acCard .SUPPORT {
  @apply border-pink-500 border-1 text-xl text-pink-500 text-center bg-pink-50 w-[60px] flex items-center justify-center;
}

.acCard .OTHER_LOCATION {
  @apply border-purple-500 border-1 text-xl text-purple-500 text-center bg-pink-50 w-[60px] flex items-center justify-center;
}

.nonPlanWarning {
  @apply text-yellow-500;
}

.nonPlan {
  @apply text-red-500;
}

.layoverCard {
  @apply flex flex-col items-center justify-center w-full not-last: border-r-1;
  cursor: pointer;
}

.layoverCard .layoverLabel {
  @apply text-lg text-center;
}

.layoverCard .layoverQty {
  @apply text-2xl font-bold;
}

.layoverActive {
  --tw-text-opacity: 1;
  color: rgba(22, 93, 255, var(--tw-text-opacity));
}

.layoverBtn {
  @apply m-[10px] w-[100px];
}

.layoverBtn.layoverBtnActive {
  @apply bg-blue-500 text-light-100;
}
</style>
