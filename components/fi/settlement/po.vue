
<template>
  <div class="h-full w-full flex flex-col">
  
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, } from "vue";
import { NIcon, useMessage, NButton, } from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style scoped>
.tableWrap {
  flex: 1;
  @apply flex bg-white w-full h-full px-16px flex-col;
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

.formRemark .formInput {
  width: 845px;
}

.sliceBtn>span:first-child {
  border-right: 0;
}

.sliceTab {
  border: 1px solid #666;
  cursor: pointer;
}

.sliceActive {
  background-color: #4696f0;
  color: #fff;
}
</style>
