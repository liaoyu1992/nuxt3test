
<template>
  <div class="w-full h-full pb-0px bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { NButton, NForm, NFormItem, NSelect, NInput, NDropdown, useDialog, useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.shelfModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}

.receive {
  @apply w-full h-full pb-[0px] bg-[#f8f8f8];
}

.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.ReceiveModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}

.formContainer {
  align-items: center;
}

.acNO {
  align-items: center;
}
</style>
