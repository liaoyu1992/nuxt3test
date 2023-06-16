
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
  
  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  NIcon,
  useMessage,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted, watch, ref } from "vue";
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
