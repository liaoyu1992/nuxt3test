<template>
  <div  class="mainContainer">
   </div>
</template>

<script lang="ts" setup>
import {ref, onMounted} from "vue";
import {NIcon, FormInst, useMessage, NButton, useDialog} from "naive-ui";
import {useI18n} from "vue-i18n";
import {format, addMonths, lastDayOfMonth} from "date-fns";
</script>

<style scoped>
.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}
</style>
