

<template>
  <div class="m-16px w-[100vw]">
  </div>
</template>

<script setup lang="ts">
import {
  NButton,
  NSpace,
  NSelect,
  NForm,
  NFormItem,
  NIcon,
  useMessage,
} from "naive-ui";
import { ref, reactive, onMounted, toRaw, VNode, h } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
</script>

<style scoped>
.mainTable {
  width: 50%;
  display: inline-block;
  margin-right: 2%;
}
.sonTable {
  width: 48%;
  display: inline-block;
  padding-left: 10px;
}
.tableWrap {
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
}
</style>
