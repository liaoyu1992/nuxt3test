
<template>
  <div>
    <span >
      <slot name="click"></slot>
    </span>
   
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, PropType } from "vue";
import { useI18n } from "vue-i18n";
import { NIcon, FormInst, NForm, NFormItem, NButton, NInput, NModal, useMessage, NSpace } from "naive-ui";

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
