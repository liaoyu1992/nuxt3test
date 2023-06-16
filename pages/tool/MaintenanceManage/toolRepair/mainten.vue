
<template>
  <div class="w-full h-[100%] bg-[#f8f8f8] px-16px flex flex-col pt-16px">
   
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch, onMounted, } from "vue";
import { useMessage, NButton, NTabs, NTab, } from "naive-ui";

</script>

<style scoped>
:deep(.n-tabs .n-tabs-pane-wrapper) {
  height: calc(100% - 42px) !important;
}
</style>
