
<template>
  <div>
    <loading-group >
      <v-chart :init-options="{ renderer: 'svg' }"/>
    </loading-group>
  </div>
</template>
<script lang="ts" scope>
  import { ref, Component, onMounted, reactive,} from "vue";
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

</script>
