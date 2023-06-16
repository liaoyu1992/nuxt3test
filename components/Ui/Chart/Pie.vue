
<template>
    <v-chart class="pie-charts" :option="opitions" :init-options="{renderer: 'svg'}" />
</template>
  
<script lang="ts" setup>
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
use([
    SVGRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);
const props = defineProps({
    legend: {
        type: Array,
        default: () => [],
    },
    data: {
        type: Array,
        default: () => [],
    }
});
const legends =  computed(() => props.legend);
const datas = computed(() => props.data);
const defaultOption = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        itemWidth: 13,
        itemHeight: 13,
        icon: "circle",
        orient: 'horizontal',
        left: 'left',
        data: legends,
    },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: datas,
            label: {
                show: true,
                formatter: (params) => `${params.percent}%`,
                position: "inside",
                color: "#ffffff",
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
const opitions = ref({});
onMounted(() => {
    opitions.value = defaultOption;
});
</script>
  
<style scoped>
.pie-charts {
    height: 100%;
    width: 100%;
}
</style>
  