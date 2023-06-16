
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8] flex flex-col">
    
  </div>
</template>
<script lang="ts" setup>
import { NButton, NSpace, NIcon, NModal, useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { useFiled } from "./useFiled";
import { onMounted, watch, ref } from "vue";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
}

.typeActive {
  background: #3491fa;
  color: #fff;
}
</style>
