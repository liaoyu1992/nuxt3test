
<template>
    <n-config-provider inline-theme-disabled >
        
    </n-config-provider>
</template>
<script lang="ts" setup>
import {
    NButton,
    NPopconfirm,
    NDropdown,
    DropdownOption,
    useDialog,
    NConfigProvider,
    zhCN,
    dateZhCN,
    enUS,
    dateEnUS,
} from "naive-ui";
import { useI18n } from "vue-i18n";

const props = defineProps({
    params: Object,
});


</script>
<style lang="scss" scoped>
.text-btn-blue {
    color: #165dff;
    font-size: 14px;
}

.text-btn-black {
    color: #1d2129;
    font-size: 14px;
}

.text-btn-red {
    color: #ff0000;
    font-size: 14px;
}

.text-btn {
    padding: 0 3px;
    height: 100%;
}

.btnFont {
    font-family: ui-sans-serifsystem-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    .more-text-btn-blue {
        color: #165dff;
        font-size: 14px;
    }

    .more-icon {
        width: 14px;
        height: 12px;
        transform: rotateZ(90deg);
    }

    .more-icon:hover {
        transform: rotateZ(-90deg);
    }

    .more-text-btn-blue:hover+.more-icon {
        transform: rotateZ(-90deg);
    }
}
</style>
