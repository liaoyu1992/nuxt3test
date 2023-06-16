
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, } from "vue";
import {
  FormInst, useMessage, NButton, NModal, NDatePicker, NUpload
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
  height: calc(100% - 70px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}
</style>
