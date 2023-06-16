
<template>
  <div class="relative pt-28px bg-white">

  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, toRaw, computed } from "vue";
import { useRoute } from "vue-router";
import {
  useMessage, NButton, NSpin, NSelect, NDropdown, NPopover, NCheckbox, NInput,
  NForm, NFormItem, FormRules
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { format } from "date-fns";

</script>
<style scoped>
:deep(.n-base-loading .n-base-loading__transition-wrapper) {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
}

.menuText {
  border: 1px solid #555454;
  border-radius: 8px;
  @apply flex flex-col px-12px py-2px mr-18px leading-20px;
}

:deep(.fc-toolbar-title) {
  position: absolute;
  left: 12%;
  top: 20px;
}</style>
