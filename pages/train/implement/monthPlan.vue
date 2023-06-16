

<template>
  <div class="flex w-full h-full bg-[#f8f8f8] px-16px pt-16px">
  
  </div>
</template>
<script lang="ts" setup>


import { NTree } from 'naive-ui';
import { onMounted } from 'vue-demi';
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.center-menu {
  @apply list-none rounded;
}

.center-menu li {
  @apply px-5 py-3 text-sm cursor-pointer hover: (bg-blue-50);
}

.center-menu .active {
  @apply font-bold text-blue-500 bg-gray-200;
}

.child-height {
  width: 100%;
  max-height: px2vw(560);
}

.treeSide {
  flex: 0 0 200px;
}

:deep(.n-tree .n-tree-node) {
  padding: 1px 0px;
  margin-left: 12px;
  margin-right: 12px;
}

:deep(.n-tree .n-tree-node-wrapper) {
  padding: 10px 0px;
}

:deep(.n-tree-node-content__text) {
  font-size: 16px;
}
</style>
