
<template>
  <n-config-provider
    inline-theme-disabled
  >
    <div class="flex btnFont" style="height: 100%">
      <div v-for="item in props.params.colDef.buttons" :key="item.text">
        <n-popconfirm
          v-if="item.confirm !== null && item.confirm !== undefined"
          @positive-click="
            () => {
              item.callback(props.params.data);
            }
          "
          @negative-click="() => {}"
        >
          <template #trigger>
            <n-button
              text
              :class="item.class"
              class="text-btn"
            >
              {{ item.text }}</n-button
            >
          </template>
          {{ item.confirm }}
        </n-popconfirm>
        <n-button
          v-else
          text
          @click="
            () => {
              item.callback(props.params.data);
            }
          "
          :class="item.class"
          class="text-btn"
          >
          {{ item.text }}</n-button
        >
      </div>
    </div>
  </n-config-provider>
</template>
<script lang="ts" setup>
import {
  NButton,
  NPopconfirm,
  NConfigProvider,
  zhCN,
  dateZhCN,
  enUS,
  dateEnUS,
} from "naive-ui";

const props = defineProps({
  params: Object,
});
</script>
<style lang="scss" scoped>
.text-btn-blue {
  color: #165dff;
  font-size: 14px;
}

.text-btn-black {
  color: #1d2129;
  font-size: 14px;
}

.text-btn-red {
  color: #ff0000;
  font-size: 14px;
}

.text-btn {
  padding: 0 3px;
  height: 100%;
}
.btnFont{
  font-family: ui-sans-serifsystem-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
