
<template>
  <v-chart
    class="histogram-charts"
    :option="opitions"
    :init-options="{ renderer: 'svg' }"
  />
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
const categorys = computed(() => props.category);
const datas = computed(() => {
    return props.data.map(element => {
        return {
            value: element, itemStyle: {
                color: '#3491FA'
            }
        };
    })
});
const defaultOption = {
    tooltip: {
        trigger: 'item'
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
            type: 'bar',
            barMaxWidth: 40,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            label: {
                show: true,
                position: 'top',
                color:'grey',
                fontSize: '12px',
      },
    }
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
