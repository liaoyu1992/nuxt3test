
<template>
  <div class="h-full w-full flex flex-col">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { NIcon, NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NInput, NTree,
  TreeOption, useDialog, NTreeSelect} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
.pageContent{
  flex:1;
  @apply w-full h-full flex;
}
.treeSide {
  flex: 0 0 240px;
}
.tableWrap {
  flex: 1;
  @apply flex bg-white w-full px-16px flex-col;
}
.btnWrap {
  flex: 0 0 60px;
  @apply  h-60px flex justify-between items-center;
}
.gridTable {
  flex: 1 !important;
}
</style>
