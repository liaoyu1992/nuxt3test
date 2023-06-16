<!--
 * @Author: liaoyu1992 1519778181@qq.com
 * @Date: 2023-06-16 08:11:54
 * @LastEditors: liaoyu1992 1519778181@qq.com
 * @LastEditTime: 2023-06-16 13:59:57
 * @FilePath: \app\pages\material\store\shelf\storeshelf.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <n-layout has-sider :style="{ width: '100%' }" class="bg-[#f8f8f8] px-16px pt-16px">
    </n-layout>
</template>

<script setup lang="ts">


import { ref, Component, onMounted, reactive, h } from "vue";

import {
  NH3,
  NCollapse,
  NCollapseItem,
  NText,
  NDivider,
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NSpace,
  NCard,
  NIcon,
  NSpin,
  NSelect,
  NGrid,
  NGridItem,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NInputNumber,
  NModal,
  TreeOption,
  NTree,
  NSwitch,
  useDialog,
  NScrollbar,
  NNumberAnimation,
} from "naive-ui";

import { useI18n } from "vue-i18n";
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
  width: 400px;
}

.shelfModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
