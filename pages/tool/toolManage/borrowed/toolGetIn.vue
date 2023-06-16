<template>
  <div class="subContainer">
    
  </div>
</template>
<script setup lang="ts">
import {
  NButton,
  NInput,
  NForm,
  FormInst,
  NIcon,
  useMessage,
  FormRules,
  FormItemRule,
  NGrid,
  NFormItemGi,
  NDatePicker,
} from "naive-ui";
import { ref, reactive, onMounted } from "vue";
import { useI18n } from "vue-i18n";

</script>
<style scoped>
.tableWrap {
  height: calc(100vh - 170px);
  /* height: 100%; */
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
</style>
