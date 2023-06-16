
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
   
  </div>
</template>
<script lang="ts" setup>
import {
  NSpace,
  NForm,
  NFormItem,
  NDatePicker
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";

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
