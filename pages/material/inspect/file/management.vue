<template>
    <div class="flex w-full h-full bg-[#f8f8f8] px-16px pt-16px">
       </div>
</template>

<script setup lang="ts">
import {
    defineComponent,
    ref,
    computed,
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
    NUpload,
    NSwitch,
    NDescriptions,
    NDescriptionsItem,
    useDialog,
    NTimePicker,
    alertDark,
    UploadCustomRequestOptions
} from "naive-ui";
</script>

<style lang="scss" scoped>
.tableWrap {
    @apply w-full h-full flex flex-col;
}

.gridTable {
    flex: 1;
}

.selectSide {
    flex: 0 0 200px;
}

:deep(.planSelect button) {
    width: 100%;
    // background-color: $color-00B42A-cyan-normal;
}

// .planSelect{
// background-color: $color-009A29-success-click;
// }
</style>
