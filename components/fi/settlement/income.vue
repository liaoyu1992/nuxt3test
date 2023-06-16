
<template>
  <div class="h-full w-full flex flex-col">
   
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, } from "vue";
import { useRouter } from "vue-router";
import {
  NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NModal, NInput,
  FormRules, NGi, NGrid, NDatePicker, NInputNumber, NTreeSelect, FormItemRule,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
  flex: 1;
  @apply flex bg-white w-full h-full px-[16px] flex-col;
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}

.formContainer {
  @apply pt-[18px] mx-[16px] rounded;
  border-bottom: #eee 1px solid;
}
</style>
