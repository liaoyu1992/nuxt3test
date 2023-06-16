
<template>
  <div class="relative">
    
  </div>
  </template>
  <script setup lang="ts">
  import { ref, onMounted, computed } from "vue";
  import { useRoute } from "vue-router";
  import { NIcon, useMessage, NButton, NPopover, NDropdown, } from "naive-ui";
  import { useI18n } from "vue-i18n";
  import { format } from "date-fns";
  
  </script>
  <style scoped>
  :deep(.n-base-loading .n-base-loading__transition-wrapper) {
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10%;
  }
  /* :deep(.fc-toolbar-title){
    position: absolute;
    left: 42%;
    top: 18px;
  } */
  </style>
