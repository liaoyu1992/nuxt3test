
<template>
    <div :style="
        'background-color: #ffffff;width: 180px; border:1px solid #e5e7eb ;max-height: 280px;padding: 10px 10px;position: fixed; left:' +
        gridStore.showX +
        'px; top: ' +
        gridStore.showY +
        'px'
    ">
        <div class="text-black-16 font-bold field-dispaly">
            {{ $t("name.fieldSetting") }}
        </div>
        <n-checkbox v-model:checked="allCheck" @update:checked="handleCheckedChange" style="margin: 10px 0">{{
            $t('name.allCheck')
        }}</n-checkbox>
        <div class="check-area">
            <n-scrollbar style="max-height: 200px">
                <n-checkbox-group v-model:value="checkColumns" :on-update:value="updateCheck">
                    <n-space vertical>
                        <n-checkbox v-for="item in actions" :key="item.field" :value="item.field"
                            :label="item.headerName" />
                    </n-space>
                </n-checkbox-group>
            </n-scrollbar>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    NScrollbar,
    NCheckboxGroup,
    NCheckbox,
    NSpace
} from "naive-ui";
import { onMounted, PropType, watchEffect } from "vue-demi";

const props = defineProps({
    gridKey: {
        type: String as PropType<string>,
        default: "",
    }
});
const emits = defineEmits(["updateCheck"]);
const allCheck = ref(false);
const gridStore = useGridStore();
const actions = ref([]);
const checkColumns = ref(gridStore.columns.split(","));
const updateCheck = (value) => {
    const checkValues = value.join(",");
    gridStore.setColumns(checkValues);
    checkColumns.value = value;
    setAllCheck();
    emits("updateCheck", checkValues);
};
const handleCheckedChange = (checked: boolean) => {
    allCheck.value = checked
    if (checked) {
        const columnList = actions.value.map((column) => column.field);
        checkColumns.value = columnList;
        emits("updateCheck", columnList.join(","));
    } else {
        checkColumns.value = [];
        emits("updateCheck", "");
    }
};
const setAllCheck = () => {
    if (actions.value.length === checkColumns.value.length) {
        allCheck.value = true;
    } else {
        allCheck.value = false;
    }
};
const checkOptions = () => {
    let data = [] as any;
    const defs = gridStore.gridDefs[props.gridKey] || [];
    defs.forEach((element: any) => {
        deOptions(element, data);
    });
    return data;
};
const deOptions = (child, data: any[]) => {
    if (child) {
        if (child.children) {
            child.children.map((item) => {
                if (!item.children) {
                    data.push(item)
                } else {
                    deOptions(item, data)
                }
            })
        } else {
            data.push(child)
        }
    }
}
onMounted(() => {
    const defs = checkOptions();
    actions.value = defs.filter(
        (element) => element.field !== "action" && element.field !== "serNo" && element.field !== "checkboxdef"
    );
    const checkedColumns = useLocalState<string>(
        `${props.gridKey}_savecolumns`,
        () => ""
    );
    const initCheckedColumns = useLocalState<string>(
        `${props.gridKey}_savecolumns_init`,
        () => ""
    );
    if (initCheckedColumns.value !== "init") {
        const columnList = actions.value.map((column) => column.field);
        checkColumns.value = columnList;
    } else {
        checkColumns.value = checkedColumns.value.split(",");
    }
    setAllCheck();
});
</script>
<style scoped>
.field-dispaly {
    padding-bottom: 0.6rem;
    border-bottom: 1px solid rgb(237, 237, 237);
}

.check-area {
    padding-left: 15px;
}
</style>