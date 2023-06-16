
<template>
  <ClientOnly>
    <div style="display: flex; flex-direction: column; height: 100%;">
      <div style="overflow: hidden; flex-grow: 1;">
        <ag-grid-vue class="ag-theme-alpine" ></ag-grid-vue>
      </div>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import {
  NScrollbar,
  NCheckboxGroup,
  NCheckbox,
  NSpace,
  NPagination,
  paginationDark,
} from 'naive-ui'
import { AgGridVue } from 'ag-grid-vue3'
import { useI18n } from 'vue-i18n'

</script>
<style lang="scss" scoped>
.field-dispaly {
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgb(237, 237, 237);
}

.ag-theme-alpine {
  --ag-foreground-color: rgba(29, 33, 41, 1);
  --ag-background-color: rgba(255, 255, 255, 1);
  --ag-header-foreground-color: rgba(29, 33, 41, 1);
  --ag-header-background-color: rgba(242, 243, 245, 1);
  --ag-odd-row-background-color: rgba(247, 248, 250, 1);
  --ag-header-column-resize-handle-color: rgb(126, 46, 132);
  --ag-border-color: rgb(237, 237, 237);
  --ag-secondary-border-color: rgb(237, 237, 237);
  --ag-disabled-foreground-color: rgba(247, 248, 250, 1);
  --ag-range-selection-border-color: rgba(235, 242, 255, 1);
  --ag-range-selection-background-color: rgba(229, 230, 235, 1);
  --ag-selected-row-background-color: rgba(235, 242, 255, 1);
  --ag-row-hover-color: rgb(239 246 255);
  --ag-checkbox-checked-color: rgba(22, 93, 255, 1);
  --ag-font-size: 14px;
  --ag-font-family: monospace;
  --ag-list-item-height: 30px;
  width: 100%;
  height: 100%;
}

.ag-my-status-bar {
  background-color: white;
  border-bottom: 1px solid rgb(237, 237, 237);
  border-left: 1px solid rgb(237, 237, 237);
  border-right: 1px solid rgb(237, 237, 237);

  .text {
    color: $color-4E5969-fill-stress;
    font-size: $fs-14;
    text-align: center;
    line-height: $height-22;
  }
}

.ag-pagination {
  // height: 8%;
  background-color: white;
}

:deep(.ag-header-cell) {
  display: inline-flex;
  align-items: center;
  position: absolute;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid rgb(237, 237, 237);
}

:deep(.ag-header-cell-resize::after) {
  content: '';
  position: absolute;
  z-index: 1;
  display: var(--ag-header-column-resize-handle-display);
  left: calc(50% - var(--ag-header-column-resize-handle-width));
  width: 1px;
  height: 100%;
  top: 0;
  background-color: transparent;
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

:deep(.ag-header-group-text) {
  word-break: break-word;
  white-space: pre-line;
}

:deep(.ag-cell-value) {
  user-select: all !important;
  -webkit-user-select: all !important;
}

:deep(.ag-header-cell-text) {
  word-break: break-word;
  white-space: pre-line;
}

:deep(.ag-header-cell-comp-wrapper) {
  height: 100%;
}

:deep(.ag-center-cols-container) {
  font-family: ui-sans-serif;
  font-size: 14px;
}

:deep(.ag-cell-label-container) {
  height: 100%;
}

:deep(.ag-theme-alpine .ag-row, .ag-theme-alpine-dark .ag-row) {
  font-size: calc(var(--ag-font-size) + 0px) !important;
  color: #1d2129;
}

:deep(.ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell)) {
  top: -1px;
}

:deep(.ag-header-group-text) {
  font-family: ui-sans-serif;
}

// :deep(.ag-body-horizontal-scroll-viewport) {

// :deep .ag-body-horizontal-scroll-viewport {
//   overflow-x: scroll;
//   height: 16px !important;
//   max-height: 16px !important;
//   min-height: 16px !important;
//   // background-color: #eee !important;
// }

// :deep(.ag-body-horizontal-scroll) {
//   height: 16px !important;
//   max-height: 16px !important;
//   min-height: 16px !important;
//   // background-color: #eee !important;
// }
</style>
