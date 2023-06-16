

<template>
  <div class="mainContainer">
  
  </div>
</template>
<script lang="ts" setup>
import {hiprint,disAutoConnect} from "vue-plugin-hiprint"
import { useRouter } from "vue-router";
import {
  NButton,
  NSpace,
  NInput,
  NForm,
  NFormItem,
  NIcon,
  useMessage,
} from "naive-ui";
import { onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 282px);
  display: flex;
  flex-direction: column;
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}
</style>
