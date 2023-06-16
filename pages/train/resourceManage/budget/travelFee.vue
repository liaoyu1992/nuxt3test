
<template>
  <div class="w-full h-full py-16px pb-0px bg-[#f8f8f8]">
   
  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  NIcon,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted, watchEffect, ref } from "vue";
import { useRouter } from "vue-router";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
}
</style>
