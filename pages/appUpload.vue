
<template>
  <div class="w-full h-full">
   
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from "vue";
import { NUpload, useMessage, NButton, NForm, NFormItem, NSelect, NInput, NUploadDragger,
  UploadCustomRequestOptions, NIcon, NSpin } from "naive-ui";

</script>

<style scoped>
  .submitForm{
    border: 1px solid #ccc;
    margin: 200px auto;
    border-radius: 5px;
    @apply w-600px h-auto;
  }
  :deep(.lodingBtn .n-button) {
    border-radius: 3px 0px 0px 3px;
  }
</style>
