<template>
  <div class="subContainer">
    
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { NButton } from "naive-ui";
import { useI18n } from "vue-i18n";
import { onMounted, reactive, ref, toRefs } from "vue";
import { throwError } from "naive-ui/es/_utils";

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
