
<template>
  <div class="mainContainer">
    </div>
</template>
<script lang="ts" setup>
  import {
    ref,
    Component,
    watch,
    onMounted,
    reactive
  } from "vue";
  import {
    useI18n
  } from "vue-i18n";
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
    NTimePicker,
    NCard,
    NGrid,
    NGi,
    NFormItemGi,
    NInputNumber,
    NRadio,
    NRadioGroup,
    NRadioButton,
    NModal,
    SelectOption,
    NDatePicker,
    NScrollbar,
    NDivider,
  } from "naive-ui";

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
    width: 350px;
  }

  .shiftModalTitle {
    @apply font-500 text-18px text-center;
  }

  .reportModalTitle {
    text-align: center;
    width: 100%;
    font-weight: bold;
    margin-bottom: 10px;
  }

</style>
