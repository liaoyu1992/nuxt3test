
<template>
    <div class="w-full h-full bg-[#f8f8f8]">
       
    </div>
</template>
<script setup lang="ts">
import {
    ref,
    onMounted,
    reactive,
    toRaw,
} from "vue";
import {
    useMessage,
    NButton,
    UploadCustomRequestOptions,
    NUpload,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style scoped>
/* .tableWrap {
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
}

.gridTable {
    flex: 1;
} */
.tableWrap {
    height: calc(100vh - 250px);
    display: flex;
    flex-direction: column;
}

.gridTable {
    flex: 1;
}

.formInput {
    width: 400px;
}
</style>
