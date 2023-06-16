
<template>
  <n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import {
  NSpin,
  NText,
  NFormItem,
  NIcon,
  useMessage,
  NButton,
  NInput,
  NLayout,
  NLayoutContent,
  NLayoutSider,
  NScrollbar,
  TreeOption,
  NTree,
  NModal,
} from "naive-ui";
import { ref, onMounted, h, Component } from "vue";
import { useI18n } from "vue-i18n";
</script>
<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 181px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.shelfModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
