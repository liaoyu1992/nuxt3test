
<template>
  <div class="pl-16px pr-16px w-full pt-8px bg-light-400">
   
  </div>
</template>
<script setup lang="ts">
import {
  NButton,
  NInput,
  NForm,
  NFormItem,
  NDatePicker,
  NIcon,
  useMessage,
  FormRules,
  FormItemRule,
} from "naive-ui";
import {
  ref,
  reactive,
  onMounted,
  toRaw,
} from "vue";
import { useI18n } from "vue-i18n";
import { utils, writeFile } from "xlsx-js-style";
import { format, addDays } from "date-fns";
import { it } from "date-fns/locale";

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
