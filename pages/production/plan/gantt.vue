<template>
  <common-screen-full
    class="h-full w-full"
  >
  </common-screen-full>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  FormInst,
  NButton,
  NModal,
  NDatePicker,
  NForm,
  NFormItem,
  useMessage,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { format, addMonths, lastDayOfMonth, parseISO } from "date-fns";
</script>

<style>
.hideHeader .formContainer {
  display: none;
}
.hideHeader .fc-toolbar {
  display: none !important;
}
.hideHeader .showHeaderButton {
  display: block !important;
  z-index: 1000;
  top: 0;
}
.hideHeader .additionalButtons {
  top: 0;
}

.hideHeader .additionalButtons .showHeaderButton {
  top: 0;
}
.mainContainerFullScreen {
  padding: 0 !important;
}
</style>
