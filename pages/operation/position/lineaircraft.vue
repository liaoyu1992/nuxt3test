<template>
    <div class="mainContainer">
       
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { NIcon, FormInst, useMessage, NButton } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
.tableWrap {
    flex: 1;
    @apply bg-white px-16px h-full flex flex-col;
}

.btnWrap {
    flex: 0 0 66px;
}

.gridTable {
    flex: 1;
}

.formInput {
    width: 300px;
}
</style>
