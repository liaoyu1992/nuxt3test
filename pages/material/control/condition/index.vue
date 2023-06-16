<template>
  <div class="receive">
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, reactive} from "vue";
import {
  NSelect,
  FormInst,
  NForm,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NGrid,
  NFormItemGi,
  NInputNumber,
  NModal,
  NIcon,
  useDialog,
} from "naive-ui";
import {useI18n} from "vue-i18n";
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

.btnWrap {
  @apply flex justify-between items-center;
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
