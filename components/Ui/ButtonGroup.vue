<template>
  <n-dropdown
    trigger="hover"
    placement="bottom-start"
    :options="buttonOptions"
    :render-option="renderOption"
    @select="handelSelect"
  >
    
  </n-dropdown>
</template>
<script setup lang="ts">
  import { h, ref, onMounted, reactive, VNode } from "vue";
  import { NIcon, useMessage,NTooltip, NDropdown, NButton, DropdownOption, DropdownGroupOption} from "naive-ui";
  import { useI18n } from "vue-i18n";
  const { locale, t } = useI18n();
  const pending = ref(true);
  const error = ref();
  const message = useMessage();
  let props = defineProps({
    btnOptions: {
      type: Array,
      default: [],
    },
    btnSelect: {
      type: Function,
      default: function () {},
    },
  });
  const buttonOptions = computed(()=>{
    return props.btnOptions;
  });
  const handelSelect = (key) => {
    props.btnSelect(key);
  }
  const renderOption = ({node, option}) => {
    return h(
      NTooltip,
      { keepAliveOnHover: false, style: { width: 'max-content', display: option.toolTip? 'block': 'none' } },
      {
        trigger: () => [node],
        default: () => option.toolTip
      }
    )
  }
  if (process.server && error.value) {
    throwError(error.value?.data?.data);
  }
</script>
<style scoped>
.moreButton{
  border: 1px solid rgb(224, 224, 230);
  @apply h-34px w-30px z-100 flex items-center justify-center bg-white border-l-0;
}
</style>
