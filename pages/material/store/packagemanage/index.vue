
<template>
  <n-grid x-gap="12" :cols="20">
    <n-gi :span="24">
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import {
  NText,
  NRow,
  NCol,
  NStatistic,
  NProgress,
  NTimeline,
  NTimelineItem,
  NSpace,
  NIcon,
  FormInst,
  NDrawerContent,
  useMessage,
  NButton,
  NGrid,
  NGi,
  NModal,
  NInput,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.activeState {
  color: #ffffff;
  background-color: #1f80f0;
}

.typeActive {
  background: #3491fa;
  color: #fff;
}
</style>
