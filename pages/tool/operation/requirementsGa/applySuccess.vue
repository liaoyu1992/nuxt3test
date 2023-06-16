

<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
   
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { NButton, NIcon, useMessage } from "naive-ui";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 282px);
  display: flex;
  flex-direction: column;
}

.btnWrap {
  flex: 0 0 66px;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}
</style>
