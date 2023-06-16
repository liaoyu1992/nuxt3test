
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8] flex flex-col">

  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  useMessage,
  NTabs,
  NTabPane,
  NModal,
  NSpace,
  NDatePicker
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted, watchEffect, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

</script>
<style lang="scss" scoped>
:deep(.n-tabs) {
  display: flex;
  flex-direction: column;
  flex: 1;
}

:deep(.n-tabs .n-tabs-pane-wrapper) {
  display: flex;
  flex: 1;
}
</style>
