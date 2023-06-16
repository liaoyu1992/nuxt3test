
<template>
  <div class="planasse">
   
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch, onMounted } from "vue";
import { useMessage, NButton, NTabs, NTab } from "naive-ui";
import {useI18n} from "vue-i18n";

</script>

<style scoped>
.planasse {
  @apply w-full h-full bg-[#f8f8f8] flex flex-col pt-0px;
}
.nuxtPage{
  flex: 1;
}
:deep(.n-tabs .n-tabs-nav.n-tabs-nav--line-type .n-tabs-nav-scroll-content) {
  height: 46px;
  padding-left: 16px;
  background-color: #fff;
}
:deep(.n-tabs .n-tabs-nav.n-tabs-nav--line-type .n-tabs-bar) {
  border-radius: 0;
  bottom: -1px;
  margin-left: 16px;
}
</style>
