<template>
    <div>
        <div class="flex flex-col h-full">
           
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import {
    NModal,
    NSpace,
    NButton,
    NInput,
    NDatePicker,
    FormRules,
    FormInst,
    FormItemRule,
    NForm,
    NFormItemGi,
    NUpload,
    NFormItem,
    NSelect,
    useMessage,
    NScrollbar,
    NRadioGroup,
    NRadio,
    NInputNumber,
    NIcon,
    NGrid,
    UploadCustomRequestOptions,


} from "naive-ui";
import { useI18n } from "vue-i18n";
import { conformsTo } from "lodash";
</script>

<style scoped>
.formInput {
    width: 450px;
}
</style>
