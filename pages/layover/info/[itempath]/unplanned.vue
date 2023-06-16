
<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">

  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter,useRoute } from "vue-router";
import { NButton, NModal, useMessage, NDatePicker } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>
<style lang="scss" scoped>
.tableWrap {
  flex: 1;
  @apply bg-white px-16px h-full flex flex-col;
}

.gridTable {
  flex: 1;
}
</style>
