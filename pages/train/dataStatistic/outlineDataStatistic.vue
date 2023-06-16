

<template>
  <div class="w-full h-full px-16px pb-0px pt-0 bg-[#f8f8f8] flex flex-col">
  
   
  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  NSelect,
  NForm,
  NFormItem,
  NDatePicker,
  NIcon,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
}

.typeActive {
  background: #3491fa;
  color: #fff;
}

li:hover {
  color: #165DFF;
  border-bottom: 2px solid #165DFF;
  transition: 0.2s all linear;
}

.activeText {
  background-color: #165DFF;
}

.activeTab {
  color: #165DFF;
  border-bottom: 2px solid #165DFF;
}
</style>




