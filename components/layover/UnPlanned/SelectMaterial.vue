
<template>
  <div>
    <n-modal></n-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  NIcon,
  FormInst,
  NForm,
  NFormItem,
  NButton,
  NInput,
  NModal,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router"

</script>
<style lang="scss" scoped>
.gridTable {
  height: 1000px;
  flex: 1;
}

.tableWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
