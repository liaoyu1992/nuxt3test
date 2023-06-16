
<template>
  <div class="w-[100%] h-[100%]">
      
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NTabs, NTabPane} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style scoped>
:deep(.n-tree .n-tree-node) {
  padding: 4px 0px;
  margin-left: 8px;
  margin-right: 8px;
}

:deep(.n-tree .n-tree-node-content) {
  display: table-row;
  z-index: 1;
}

:deep(.n-tree .n-tree-node-content .n-tree-node-content__text) {
  width: 145px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

:deep(.n-tree .n-tree-node-content .n-tree-node-content__suffix) {
  display: inline-block;
  padding-left: 10px;
  margin-right: 4px;
  position: absolute;
  top: 0px;
  right: -6px;
  z-index: 9999;
}

:deep(.n-tree .n-tree-node-switcher) {
  height: 20px;
  width: 20px;
}

.gridTable {
  flex: 1;
}

.treeSide {
  flex: 0 0 260px;
}

.tableWrap {
  flex: 1;
  @apply px-16px flex flex-col;
}

.btnWrap {
  flex: 0 0 60px;
  @apply h-[60px] flex justify-between items-center;
}

.treeTip {
  position: absolute;
  bottom: 16px;
  left: 0;
}</style>
