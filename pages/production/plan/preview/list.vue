<template>
  <div class="mainContainer">
     
  </div>
</template>

<script setup lang="ts">
import { ref, Component, watch, onMounted, reactive, toRaw } from "vue";
import {
  NIcon,
  NInput,
  NGrid,
  FormInst,
  NForm,
  NFormItem,
  NFormItemGi,
  useMessage,
  NButton,
  NModal,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.formInput {
  width: 300px;
}
</style>
