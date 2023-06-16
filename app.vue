
<template>
  <n-dialog-provider>
    <n-message-provider>
      <n-config-provider inline-theme-disabled>
        <n-notification-provider>
          <NuxtLayout>
            <NuxtPage></NuxtPage>
          </NuxtLayout>
        </n-notification-provider>
      </n-config-provider>
    </n-message-provider>
  </n-dialog-provider>
</template>
<script lang="ts" setup>
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  zhCN,
  dateZhCN,
  enUS,
  dateEnUS,
} from "naive-ui";

</script>
<style>
</style>
