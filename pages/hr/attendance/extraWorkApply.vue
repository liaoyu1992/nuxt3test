
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
 </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import {
  NIcon,
  FormInst,
  NForm,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NGrid,
  NFormItemGi,
  NModal,
  NCheckbox,
  useDialog,
  logDark,
} from "naive-ui";
</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.gridTable {
  flex: 1;
}
</style>
