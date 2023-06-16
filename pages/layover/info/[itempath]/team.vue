
<template>
  <div class="pt-16px h-full overflow-y-scroll">
   
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NSpin,
  NButton,
  NIcon,
  NPopover,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { format, parseISO } from "date-fns";
</script>
<style lang="scss" scoped>
.memberCell {
  @apply p-[10px];
}
</style>
