
<template>
    <div class="h-full flex flex-col">
      
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import {
    NIcon,
    FormInst,
    NForm,
    NFormItem,
    useMessage,
    NButton,
    NInput,
    NInputNumber,
    NGi,
    NGrid,
    NRadioGroup,
    NRadio,
    NUpload,
    NModal,
    NSelect,
    NTabs,
    NTabPane,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
.tableWrap {
    height: calc(100% - 64px);
    @apply flex flex-col bg-white w-full px-[16px];
}

.btnWrap {
    flex: 0 0 60px;
    @apply flex justify-between items-center;
}

.gridTable {
    flex: 1;
    height: calc(100% - 60px);
}

:deep(.n-tabs .n-tabs-pane-wrapper) {
    display: flex;
    flex: 1;
}
</style>
