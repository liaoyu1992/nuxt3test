<template>
  <v-chart class="histogram-charts" :option="opitions" :init-options="{renderer: 'svg'}" />
</template>
<script lang="ts" setup>
import { Axis, use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { computed } from 'vue-demi';
use([
  SVGRenderer,
  GridComponent,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const props = defineProps({
  category: {
      type: Array,
      default: () => []
  },
  data: {
      type: Array,
      default: () => []
  }
});
// 测试数据
const testCategory = ref(['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06',]);
const testData = ref(['300','600','900']);

const categorys = computed(() => testCategory.value);
const datas = computed(() => {
  return testData.value.map(element => {
      return {
          value: element, itemStyle: {
              color: '#3491FA'
          }
      };
  })
});
const defaultOption = {
  tooltip: {
      trigger: 'axis'
  },
  textStyle: {
      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
  },
  xAxis: {
      type: 'category',
      data: categorys
  },
  yAxis: {
      type: 'value'
  },
  series: [
      {
          data: datas,
          type: 'line',
          barMaxWidth: 40,
          emphasis: {
              itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
          },
      },
  ]
};
const opitions = ref({});
onMounted(() => {
  opitions.value = defaultOption;
});
</script>
<style scoped>
.histogram-charts {
  height: 100%;
  width: 100%;
}
</style>
