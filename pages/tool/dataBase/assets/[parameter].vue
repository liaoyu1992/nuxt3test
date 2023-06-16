
<template>
  <div class="w-full h-full p-16px pt-0px pb-0px pl-0px bg-[#f8f8f8]" >
   
  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  FormInst,
  NIcon,
  NForm,
  NFormItem,
  NInput,
  NModal,
  NUpload,
  UploadCustomRequestOptions,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { throwError } from "naive-ui/es/_utils";

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
</style>

