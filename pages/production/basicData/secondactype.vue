
<template>
    <div class="mainContainer">
        
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

:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
    display: none;
}
</style>
