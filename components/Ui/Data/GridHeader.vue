
<template>
  <div class="my-header">
      
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  params: Object,
});


</script>
<style lang="scss">
@mixin icon-base {
  display: block;
  speak: none;
  box-sizing: border-box;
  outline: none;
  font-family: "agGridAlpine";
  font-size: 16px;
  width: 12px;
  height: 12px;
  line-height: 16px;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.my-header {
  @apply flex items-center text-[14px] text-[#000] font-sans font-medium justify-between;
  height: 100%;
  width: 100%;

  .sort-area {
    @apply flex items-center flex-col-reverse flex-col;

    .triangle-bottom-check {
      width: 0;
      height: 0;
      border-top: 4px solid rgba(22, 93, 255, 1);
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }

    .triangle-bottom-normal {
      width: 0;
      height: 0;
      border-top: 4px solid rgba(0, 0, 0, 0.2);
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }

    .triangle-top-check {
      width: 0;
      height: 0;
      border-bottom: 4px solid rgba(22, 93, 255, 1);
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }

    .triangle-top-normal {
      width: 0;
      height: 0;
      border-bottom: 4px solid rgba(0, 0, 0, 0.2);
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
    }
  }

  .title {
    @apply flex items-center justify-start;
  }


  .title-name {
    line-height: 120%;
    overflow: visible;
    position: relative;
  }

  .filter-dot {
    background-color: #fa5151;
    width: 4px;
    height: 4px;
    font-size: 13px;
    border-radius: 2px;
    position: absolute;
    right: -5px;
    top: -5px;
  }

  .icon-filter {
    @include icon-base;
  }

  .icon-filter::before {
    content: "\f114";
  }

  .filter-check {
    color: rgba(22, 93, 255, 1);
  }

  .filter-normal {
    color: rgba(194, 194, 196, 1);
  }
}

.ag-header-cell-resize::after {
  background: #ccc;
  width: 1px;
}
</style>
