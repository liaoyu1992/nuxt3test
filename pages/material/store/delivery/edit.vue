<template>
    <div class="aircraftAddPage">
       
        <nuxt-page class="bg-white h-[calc(100%-50px)] p-[16px]"></nuxt-page>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useMessage, NButton, NTabs, NTab } from "naive-ui";
import { useI18n } from "vue-i18n";
import { onBeforeRouteUpdate } from "vue-router";


</script>
<style lang="scss" scoped>
.aircraftAddPage {
    width: 100%;
    position: relative;
    height: 100%;
    padding: 16px 16px 0 16px;
    background: #f8f8f8;
    @apply flex flex-col;
}

.formInput {
    width: 300px;
}
</style>