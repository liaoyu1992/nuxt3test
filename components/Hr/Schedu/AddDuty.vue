
<template>
  <div>
    <n-modal >
    </n-modal>
    <hr-schedu-operation-duty />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watchEffect, } from "vue";
import {
  NSelect, FormInst, NForm, FormItemRule, useMessage, NButton, NDatePicker, NGrid, NFormItemGi, NModal, FormRules,
} from "naive-ui";
import {
  format, addDays, parseISO, startOfMonth,
  endOfMonth,
} from "date-fns";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped></style>

