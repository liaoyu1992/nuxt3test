
<template>
  <div style="width: 100%; height: 100%">
    <template v-if="pending">
      <LoadingSkeleton />
    </template>
    <template v-else-if="error">
      <n-result
        class="mt-10"
        status="500"
        :description="error?.data?.data"
      >
        <template #footer>
          <n-button @click="$router.go(-1)"></n-button>
        </template>
      </n-result>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { NButton, NResult } from "naive-ui";
const props = defineProps({
  pending: {
    type: [String, Boolean, Symbol, null, Object],
    default: false,
  },
  error: {
    type: [String, Boolean, Symbol, null, Object],
    default: false,
  },
});
const loading = ref(false);
</script>
