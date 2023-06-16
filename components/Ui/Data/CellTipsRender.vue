
<template>
  <div class="cell-container">
    <n-popover v-if="showTips" placement="bottom-start" trigger="hover">
      <template #trigger>
        <div :class="[tipsStyle, 'tips']"></div>
      </template>
      {{ params.content }}
    </n-popover>
    <div class="content">{{ params.value }}</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { NPopover } from "naive-ui";
const props = defineProps({
  params: Object,
});
// ComEnum.ToolTipStyle
const tipsStyle = computed(() => {
  return props.params.type || "info";
});
const showTips = computed(() => {
  if (props.params.show instanceof Function) {
    return props.params.show(props.params);
  }
  return props.params.show;
});
</script>
<style lang="scss" scoped>
.cell-container {
  position: relative;
}
.tips {
  position: absolute;
  top: -26px;
  right: -20px;
  width: 0;
  height: 0;
  border: 20px solid;
  border-bottom-color: transparent !important;
  border-top-color: transparent !important;
  border-left-color: transparent !important;
  transform: rotateZ(135deg);
}

.success {
  border-color: #23c343;
}
.error {
  border-color: #f53f3f;
}
.warning {
  border-color: #f7ba1e;
}
.overdue {
  border-color: #165dff;
}
.info {
  border-color: #c9cdd4;
}
</style>
