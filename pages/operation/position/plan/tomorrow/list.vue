<template>
  <div class="mainContainer">
  </div>
</template>

<script setup lang="ts">
import { ref, Component, watch, onMounted, reactive } from "vue";
import {
  NIcon,
  NSelect,
  NInput,
  NGrid,
  NDatePicker,
  FormInst,
  NForm,
  NFormItemGi,
  useMessage,
  NButton,
  NModal,
  NRadioGroup,
  NRadio,
} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}
.btnWrap {
  flex: 0 0 66px;
}
.gridTable {
  flex: 1;
}
.formInput {
  width: 300px;
}
.notSet {
  background-color: red;
}
</style>
