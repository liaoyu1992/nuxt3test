
<template>
  <sub-drawer>
    
  </sub-drawer>
</template>

<script lang="ts" setup>
import {
  FormInst, NForm, FormItemRule, useMessage, NButton, NDatePicker, NGrid, NFormItemGi, NModal, FormRules, NInput
} from "naive-ui";
import { onMounted, ref, watchEffect } from "vue";
import { parseISO, startOfMonth, endOfMonth, differenceInDays, startOfWeek, endOfWeek, addDays, format, isSameDay } from "date-fns"
import { useI18n } from "vue-i18n";

</script>

<style lang="scss" scoped>
.monthGrid {
  display: grid;
  grid-template-columns: repeat(7, calc(1/7*100%));
  // grid-template-columns: repeat(7, 1/7*100%);
}

.tabelHeader {
  @apply bg-gray-300 h-50px flex justify-center items-center
}
</style>