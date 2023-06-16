
<template>
  <div class="action-header">
    
  </div>
</template>
<script lang="ts" setup>
import { NTooltip } from "naive-ui";

const props = defineProps({
  params: Object,
});

</script>
<style lang="scss">
.action-header {
  @apply flex items-center text-[14px] text-[#000] font-sans font-medium justify-between;
  height: 100%;
  width: 100%;

  .title-name {
    line-height: 100%;
    overflow: visible;
    position: relative;
  }

  .controller-area {
    height: 100%;
    width: 1.626rem;
    position: relative;
    padding-left: 0.625rem;
  }

  .controller-border-left {
    border-left: 1px solid rgba(229, 230, 235, 1);
  }

  .controller {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 1rem;
    height: 1rem;
  }
}

.ag-header-cell-resize::after {
  background: #ccc;
  width: 1px;
}
</style>
  