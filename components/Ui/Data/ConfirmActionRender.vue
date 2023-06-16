
<template>
  <n-config-provider
    inline-theme-disabled
    :theme-overrides="themeOverrides"
    :locale="localeT"
    :date-locale="dateLocaleT"
  >
    <div class="flex btnFont">
      <div v-for="item in showBtns" :key="item.text">
        <n-popconfirm
          :show-icon="false"
          v-if="item.confirm !== null && item.confirm !== undefined"
          @positive-click="
            () => {
              item.callback(props.params.data);
            }
          "
          @negative-click="() => {}"
        >
          <template #trigger>
            <n-button
              text
              :class="item.class"
              class="text-btn"
              :disabled="disabled(item)"
            >
              {{ item.text }}</n-button
            >
          </template>
          <div class="mt-8px">
            <span>{{ item.confirm }}</span>
            <n-input size="small" class="mt-8px mb-2px" v-model:value="inputVal" type="text" placeholder="请输入文件夹名" />
          </div>
        </n-popconfirm>
        <n-button
          v-else
          text
          @click="
            (e) => {
              e.stopPropagation();
              item.callback(props.params.data);
            }
          "
          :class="item.class"
          class="text-btn"
          :disabled="disabled(item)"
        >
          {{ item.text }}</n-button
        >
      </div>
      <n-dropdown
        v-if="hideBtns().length > 0"
        :options="options"
        @select="handleSelect"
      >
        <div class="flex btnFont items-center justify-center">
          <span class="more-text-btn-blue"> {{ $t("name.more") }}</span>
          <img class="more-icon" src="@/assets/images/icon_more.svg" />
        </div>
      </n-dropdown>
    </div>
  </n-config-provider>
</template>
<script lang="ts" setup>
import {
  NButton,
  NPopconfirm,
  NDropdown,
  NConfigProvider,
  zhCN,
  dateZhCN,
  enUS,
  dateEnUS,
  DropdownOption,
  useDialog,
  NInput,
} from "naive-ui";
import i18n from "@/locales/index";
import { useI18n } from "vue-i18n";
const props = defineProps({
  params: Object,
});
const dialog = useDialog();
const { t } = useI18n();
const { themeOverrides } = useThemeOverrides();
const localeT = ref(i18n.global.locale === "zh" ? zhCN : enUS);
const dateLocaleT = ref(i18n.global.locale === "zh" ? dateZhCN : dateEnUS);
const showMore = ref(false);
const inputVal = ref();
const show = (item) => {
  if (item.show && typeof item.show === "function") {
    return item.show(props.params.data);
  } else if (item.show) {
    return item.show;
  }
  return true;
};
const showBtns = computed(() => {
  const filterBtns = props.params.colDef.buttons.filter((element) =>
    show(element)
  );
  if (filterBtns && filterBtns.length <= 3) {
    return filterBtns;
  } else if (filterBtns && filterBtns.length > 3) {
    const btnsTmp = [...filterBtns];
    const showBtnsTmp = btnsTmp.slice(0, 2);
    return showBtnsTmp;
  }
  return [];
});
const hideBtns = () => {
  const filterBtns = props.params.colDef.buttons.filter((element) =>
    show(element)
  );
  if (filterBtns && filterBtns.length <= 3) {
    return [];
  } else if (filterBtns && filterBtns.length > 3) {
    const btnsTmp = [...filterBtns];
    const showBtns = btnsTmp.slice(2);
    return showBtns;
  }
  return [];
};
const options = computed(() => {
  const filterBtns = hideBtns();
  return filterBtns.map((element) => {
    return {
      label: element.text,
      key: element.text,
      disabled: disabled(element),
      ext: element,
    };
  });
});
const disabled = (item) => {
  if (item.enable && typeof item.enable === "function") {
    return item.enable(props.params.data) === false;
  } else {
    return item.enable === false;
  }
};
const handleSelect = (key: string | number, option: DropdownOption) => {
  console.log(key, option);
  if (
    option &&
    option.ext &&
    option.ext.confirm !== null &&
    option.ext.confirm !== undefined
  ) {
    dialog.warning({
      title: t("name.warning"),
      content:  option.ext.confirm,
      maskClosable: false,
      positiveText: t("name.confirm"),
      negativeText: t("name.cancel"),
      onPositiveClick: (e) => {
        e.stopPropagation();
        if (option.ext.callback) {
          option.ext.callback(props.params.data);
        }
      },
      onNegativeClick: (e) => {
        e.stopPropagation();
      },
    });
  } else if (option && option.ext) {
    if (option.ext.callback) {
      option.ext.callback(props.params.data);
    }
  }
};
watch(
  () => i18n.global.locale,
  (newVal, oldVal) => {
    localeT.value = newVal === "zh" ? zhCN : enUS;
    dateLocaleT.value = newVal === "zh" ? dateZhCN : dateEnUS;
  }
);
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
  font-family: ui-sans-serifsystem-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
  .more-text-btn-blue:hover + .more-icon {
    transform: rotateZ(-90deg);
  }
}
</style>
