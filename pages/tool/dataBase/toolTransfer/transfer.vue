

<template>
  <div class="w-full h-full px-[16px] pb-[0px] pt-0 bg-[#f8f8f8]">
  
  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  NSpace,
  NInput,
  NSelect,
  NForm,
  NFormItem,
  NDatePicker,
  NIcon,
  useMessage,
} from "naive-ui";
import { ref, reactive, onMounted } from "vue";

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
