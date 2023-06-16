
<template>
  <div class="w-full h-full px-[16px] pb-[0px] pt-[16px] bg-[#f8f8f8]">

  </div>
</template>

<script setup lang="ts">
import { ref, Component, watch, onMounted, reactive } from "vue";
import {
  NIcon,
  NInput,
  NGrid,
  FormInst,
  NForm,
  NFormItemGi,
  useMessage,
  NButton,
  NModal,
  NSelect,
  NInputNumber,
  NRate,
  NRadioGroup,
  NRadio,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}
.btnWrap {
  @apply flex justify-between;
}
.gridTable {
  flex: 1;
}
</style>
