
<template>
  <div class="w-full h-full flex-wrap-grid">
  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  NTabs,
  NTabPane,
  useMessage,
  useDialog,
} from "naive-ui";
import { computed, onMounted, ref, toRaw, watch } from "vue-demi";
import { useI18n } from "vue-i18n";
</script>
<style scoped>
:deep(.n-tabs-pane-wrapper) {
  flex: 1;
}
</style>
