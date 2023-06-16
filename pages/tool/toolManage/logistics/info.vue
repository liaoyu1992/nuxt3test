
<template>
  <div class="subContainer">
   
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  onMounted,
  reactive,
  toRaw,
} from "vue";
import {
  useMessage,
  NButton,
  UploadCustomRequestOptions,
  NUpload,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style scoped>
.tableWrap {
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}
</style>
