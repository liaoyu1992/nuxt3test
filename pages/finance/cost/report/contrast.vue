<!--
 * @Author: liaoyu1992 1519778181@qq.com
 * @Date: 2023-06-16 08:11:53
 * @LastEditors: liaoyu1992 1519778181@qq.com
 * @LastEditTime: 2023-06-16 08:18:58
 * @FilePath: \frontend\packages\app\pages\finance\cost\report\contrast.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full h-full flex flex-col">
  </div>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent, } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
use([SVGRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);
import { ref, Component, onMounted, reactive,} from "vue";
import {  NIcon, NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NModal, NDatePicker,
  NDataTable, NInput} from "naive-ui";
import { useI18n } from "vue-i18n";

import { format } from "date-fns";

</script>

<style scoped>
.tableWrap {
  /* height: calc(100% - 70px); */
  flex: 1;
  @apply  flex bg-white w-full px-[16px] flex-col;
}
.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between;
}
.gridTable {
  flex: 1;
}
</style>
