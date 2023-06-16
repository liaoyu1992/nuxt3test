<template>
    <div class="receive">
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
    UploadInst
} from "naive-ui";
import { stringLiteral } from "@babel/types";
import { format, addMonths, lastDayOfMonth } from "date-fns";
import { useI18n } from "vue-i18n";
import { validate } from "json-schema";
import { add } from "lodash";
import { isatty } from "tty";
</script>

<style lang="scss" scoped>
.tableWrap {
    height: calc(100vh - 250px);
    display: flex;
    flex-direction: column;
}

.gridTable {
    flex: 1;
}

.formInput {
    width: 300px;
}

.shelfModalTitle {
    text-align: center;
    width: 100%;
    font-weight: bold;
    margin-bottom: 10px;
}

.receive {
    @apply w-full h-full pb-[0px] bg-[#f8f8f8];
}

.tableWrap {
    flex: 1;
    @apply bg-white px-16px h-full flex flex-col;
}

.btnWrap {
    @apply flex justify-between items-center;
}

.gridTable {
    flex: 1;
}

.formInput {
    width: 300px;
}

.ReceiveModalTitle {
    text-align: center;
    width: 100%;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>

