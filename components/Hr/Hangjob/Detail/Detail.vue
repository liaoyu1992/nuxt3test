
<template>
  <div>
    <sub-drawer>
    
    </sub-drawer>
    <hr-hangjob-detail-edit-examine></hr-hangjob-detail-edit-examine>
    <hr-hangjob-detail-delay-add></hr-hangjob-detail-delay-add>
    <hr-hangjob-detail-delay-edit></hr-hangjob-detail-delay-edit>
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
