
<template>
  <div class="w-full h-full p-16px pt-0px pb-0px pl-0px bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { toNumber } from "lodash";
import { FormInst, useMessage, NButton } from "naive-ui";
import { useRouter, useRoute } from "vue-router";
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

.issueModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
