
<template>
  <div class="h-full w-full flex flex-col">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, } from "vue";
import { useRouter } from "vue-router";
import {
  NIcon, FormInst, NForm, useMessage, NButton, NModal, FormRules, NGrid, NDatePicker, NInputNumber, NFormItemGi
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
  flex: 1;
  @apply flex flex-col bg-white w-full px-[16px];
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
