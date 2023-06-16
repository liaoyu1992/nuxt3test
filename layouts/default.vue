
<template>
  <div class="body flex">
    <div class="w-[100%] h-[100vh]">
      <n-layout class="flex h-[100%]" has-sider>
        
        <n-layout class="w-[100%] bg-[#f8f8f8]">
          <n-layout-header class="h-[60px]">
            <client-only>
              <TabBar class="tabBar bg-white"></TabBar>
            </client-only>
          </n-layout-header>
          <n-layout-content class="layoutContent py-0 bg-[#f8f8f8]">
            <div class="mainWrap bg-white">
              <main class="container">
                <slot />
              </main>
            </div>
          </n-layout-content>
        </n-layout>
      </n-layout>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  useNotification,
  useMessage,
} from "naive-ui";
import {
  h,
  ref,
  onMounted,
  computed,
  provide,
} from "vue";

import { TabsInst } from "naive-ui";

</script>
<style scoped>
.body {
  min-width: 800px;
  height: 100%;
  @apply bg-[#f8f8f8] flex flex-col min-h-screen;
}
.layoutContent {
  height: calc(100% - 60px);
  display: flex;
  display: -webkit-flex;
  flex-flow: column;
  display: -ms-flexbox;

}
.tabBar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #f5f5f5;
}

.mainWrap {
  height: 100%;
}
.tabs {
  position: absolute;
  top: 0px;
  left: 0;
}
.container {
  width: 100%;
  max-width: none;
  display: -webkit-flex;
  flex-flow: column;
  display: flex;
  display: -ms-flexbox;
  height: 100%;
  padding: 0 !important;
}
.dropDownIcon {
  position: absolute;
  top: 81px;
  right: 12px;
  z-index: 100;
}
</style>
