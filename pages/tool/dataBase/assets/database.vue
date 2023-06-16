
<template>
  <div class="w-full h-[100%] bg-[#f8f8f8]  flex flex-col">
    
    <nuxt-page />
  </div>
</template>
<script lang="ts" setup>
import { NTabs, NTab, useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
}
</style>
