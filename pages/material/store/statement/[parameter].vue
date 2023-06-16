
<template>
    <div class="w-full h-[100%] bg-[#f8f8f8] px-4px flex flex-col ">
      
    </div>
</template>

<script setup lang="ts">
import {
    defineComponent,
    ref,
    Component,
    watch,
    onMounted,
    reactive,
    h,
    toRaw,
} from "vue";
import {
    NIcon,
    NSelect,
    FormInst,
    NForm,
    NFormItem,
    FormItemRule,
    useMessage,
    NButton,
    NInput,
    NDatePicker,
    NCard,
    NGrid,
    NGi,
    NFormItemGi,
    NInputNumber,
    NModal,
    SelectOption,
    NCheckbox,
    MenuOption,
    NMenu,
    TreeOption,
    NTree,
    NSwitch,
    NDescriptions,
    NDescriptionsItem,
    NRadioGroup,
    NRadio,
    NDivider,
    UploadCustomRequestOptions,
    NUpload,
    UploadInst,
    NTabs,
    NTabPane,
    NDataTable,
} from "naive-ui";
import { stringLiteral } from "@babel/types";
import { format, addMonths, lastDayOfMonth } from "date-fns";
import { useI18n } from "vue-i18n";
import { validate } from "json-schema";
import { add } from "lodash";
import { isatty } from "tty";

</script>

<style lang="scss" scoped>
.receive {
    @apply w-full h-full pb-[0px] bg-[#f8f8f8];
}

.tableWrap {
    height: calc(100vh - 190px);
    @apply flex flex-col bg-white w-full px-[16px];
}

.gridTable {
    flex: 1;
    height: calc(100% - 60px);
}

.btnWrap {
    flex: 0 0 60px;
    @apply flex justify-between items-center;
}

.formInput {
    width: 400px;
}

.ReceiveModalTitle {
    text-align: center;
    width: 100%;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>

