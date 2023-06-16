
<template>
  <div
    class="w-full h-full pb-[0px] pt-0 bg-[#f8f8f8]"
    style="height: 100%"
  >
   
  </div>
</template>
<script lang="ts" setup>
import {
  NDescriptions,
  NDescriptionsItem,
  NIcon,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted} from "vue";
import { useRouter } from "vue-router";

</script>
<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 282px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}

.typeActive {
  background: #3491fa;
  color: #fff;
}
</style>
