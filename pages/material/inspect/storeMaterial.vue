
<template>
  <div class="mainContainer">
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import {
  NIcon,
  FormInst,
  useMessage,
  NButton,
  NTabs,
  NTabPane,
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
  width: 200px;
}

.storeModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
