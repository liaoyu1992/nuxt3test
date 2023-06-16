
<template>
  <div class="emailAddPage">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted, reactive, } from "vue";
import { useRouter, useRoute } from "vue-router";
import { FormInst, NForm, NFormItem, useMessage, NButton, NInput, NCard, NGrid, NFormItemGi, FormItemRule,NModal, NSelect, NIcon, } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style lang="scss" scoped>
.emailAddPage {
  width: 100%;
  position: relative;
  height: 100%;
  overflow-y: scroll;
  padding: 16px 16px 0 16px;
  background: #f8f8f8;
}
.formInput {
  width: 300px;
}
.shiftModalTitle{
  @apply font-500 text-18px text-center;
}
</style>
