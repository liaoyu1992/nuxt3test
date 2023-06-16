
<template>
  <div>
    <n-modal >
    </n-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref, inject, toRaw, } from "vue";
import {
  NSelect, FormInst, NForm, FormItemRule, useMessage, NButton, NInput, NDatePicker, NGrid, NFormItemGi, NModal, FormRules,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { number } from "echarts/core";

</script>
<style lang="scss" scoped>
.formInput {
  width: 400px;
}
</style>
