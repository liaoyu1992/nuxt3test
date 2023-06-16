
<template>
  <div class="w-full h-full px-[16px] pb-[0px] pt-0 bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import {
  NButton,
  NSpace,
  NInput,
  NForm,
  NFormItem,
  NIcon,
  useMessage,
  NDatePicker,
} from "naive-ui";
import { onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.tableWrap {
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
