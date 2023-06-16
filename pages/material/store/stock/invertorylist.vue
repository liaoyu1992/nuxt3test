
<template>
  <div class="w-full h-full p-16px pt-0px pb-0px pl-0px bg-[#f8f8f8]">
    </div>
</template>

<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  useMessage,
  NButton,
  NInput,
  NGrid,
  NGi,
  NFormItemGi,
  NRadio,
  NRadioGroup,
  NModal,
  NSpace,
} from "naive-ui";

</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}
</style>
