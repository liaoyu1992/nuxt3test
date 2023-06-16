<template>
  <div class="w-full h-full pb-[0px] pt-0 bg-[#f8f8f8] felx flex-col">

  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  NInput,
  NForm,
  NFormItem,
  NIcon,
  useMessage,
  NSwitch,
} from "naive-ui";
import { onMounted, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from 'vue-router'
</script>
<style lang="scss" scoped>
.btnWrap {
  flex: 0 0 60px;
}
</style>
