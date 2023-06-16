<template>
  <div class="flex items-center">
    <img class="inline-block mt-5px" v-if="params.data.logoAttachmentId" :src="imgUrl(params)" width="30" height="30"/>
    <div v-else></div>
  </div>
</template>
<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  params: Object,
});
const config = useRuntimeConfig();
const appBaseUrl = config.public.apiBase;
const imgUrl = (args) => {
  if (args.data.logoAttachmentId) {
    return `${appBaseUrl}sys/attachment/download?id=${args.data.logoAttachmentId}`
  } else {
    return ""
  }
}
</script>

<style lang="scss" scoped>
</style>
