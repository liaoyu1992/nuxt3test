<template>
  <div class="w-full h-full">
  </div>
</template>

<script lang="ts" setup>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([SVGRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
import { ref, Component, onMounted, reactive,} from "vue";
import {  NIcon, NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NDatePicker,
  NDataTable, NInput} from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
  height: calc(100% - 70px);
  overflow-y: scroll;
  @apply flex bg-white w-full pl-16px pr-6px flex-col;
}
.btnWrap {
  flex: 0 0 60px;
}
.gridTable {
  flex: 1;
}
</style>

