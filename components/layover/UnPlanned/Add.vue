
<template>
  <n-modal></n-modal>
</template>
<script setup lang="ts">
import { watch} from "vue";
import {
  NModal,
  NSpace,
  NButton,
  NInput,
  NForm,
  FormRules,
  FormInst,
  useMessage,
  NGrid,
  NFormItemGi,
  NDatePicker,
  NInputNumber
} from "naive-ui";
import {useRoute} from "vue-router"
import {addDays, format} from "date-fns";

</script>
