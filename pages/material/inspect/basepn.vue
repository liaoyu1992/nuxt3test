
<template>
  <div class="bg-[#f8f8f8] px-16px pt-16px rounded">
   
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import { NIcon, useMessage, NButton, NModal, UploadInst } from "naive-ui";
</script>
<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 145px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}
</style>
