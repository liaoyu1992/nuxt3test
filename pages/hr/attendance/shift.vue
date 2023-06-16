<!--
*
* @author: wenyp
* @description: 班次管理
* @createTime: 2022-09-26 16:22:57
*
-->
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NInput,
  NTimePicker,
  NDatePicker,
  NGrid,
  NFormItemGi,
  NInputNumber,
  NModal,
  SelectOption,
  NCheckbox,
  CascaderOption,
  NSpace,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { computed } from "@vue/reactivity";
</script>
<style scoped>
.btnWrap {
  flex: 0 0 60px;
}
</style>
