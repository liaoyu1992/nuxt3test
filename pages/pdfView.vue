
<template>
  <ClientOnly>
    <div class="w-full h-[100vh] flex justify-center items-center">
        <vue-pdf-embed
          class="h-[100vh]"
          style="width:210mm"
          ref="refPdf"
          :source="pdfSrc"
          :scale="4"
          @loaded="handleDocumentRender"
        />
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, nextTick } from "vue";
import { NSpin } from "naive-ui";

const pdfSrc = ref("");
const handleDocumentRender = () => {
    
};

</script>
  
<style lang="scss" scoped>
.loading {
    width: 3rem;
    margin: 0 auto;
}
</style>