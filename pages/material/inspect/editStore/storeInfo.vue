
<template>
  <div class="flex flex-col h-full">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch, reactive } from "vue";
import {
  FormInst,
  NForm,
  NSelect,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NGrid,
  NFormItemGi,
  NInputNumber,
  NRadio,
  NRadioGroup,
  FormItemRule,
  NScrollbar,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style lang="scss" scoped>
.aircraftAddPage {
  width: 100%;
  position: relative;
  height: 100%;
  overflow: scroll;
  padding: 16px 16px 0 16px;
  background: #f8f8f8;
}

.formInput {
  width: 300px;
}
</style>
