<template>
  <div class="relative h-full flex flex-col">

      <ui-chart-scheduler
        
      ></ui-chart-scheduler>

  </div>
</template>

<script setup lang="ts">

import { computed, ref } from "vue";
import {
  useDialog,
  useNotification,
  NPopover,
  NSelect,
  NButton,
  useMessage,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import {
  format,
  compareAsc,
  parseISO,
  differenceInDays,
  addDays,
  isEqual,
  isAfter,
  isBefore,
} from "date-fns";

</script>

<style>
@keyframes blink {
  0% {
    opacity: 1;
    scale: 1.5;
  }
  100% {
    opacity: 0;
    scale: 1;
  }
}
.custom-event.blink {
  font-weight: bold;
  animation: blink 1s linear infinite;
}
.additionalButtons {
  z-index: 1000;
  background: white;
  @apply absolute left-[20px] top-[20px];
}
</style>
