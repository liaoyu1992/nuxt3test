
<template>
  <div class="w-full h-full px-[16px] pb-[0px] pt-0">
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, toRaw } from "vue";
import { useI18n } from "vue-i18n";
import { useJcApi } from "../../../apis/api";

import {
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NButton,
  NList,
  NListItem,
  NThing,
  FormRules,
  FormItemRule,
  NModal,
  NSwitch,
  NInput,
  NInputGroup,
  NForm,
  NFormItem,
  FormInst,
  useMessage,
} from "naive-ui";
import { emailConfig } from "../../../apis/jc/email-config-modal";
import { set } from "vue-demi";
</script>
<style lang="scss" scoped>
.gridTable {
  flex: 1;
}
</style>
