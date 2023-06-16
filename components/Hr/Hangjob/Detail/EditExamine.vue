
<template>
  <div>
    <n-modal >
    </n-modal>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  Component,
  watch,
  onMounted,
  reactive,
  computed,
  inject,
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
  FormRules,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { number } from "echarts/core";

</script>
<style lang="scss" scoped>
.formInput {
  width: 400px;
}

ul {
  li {
    @apply pt-5px flex;

    p {
      width: 80px;
    }

    span {
      width: 140px;
    }
  }
}
</style>
