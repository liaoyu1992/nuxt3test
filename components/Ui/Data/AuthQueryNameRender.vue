
<template>
    <div class="auth-query-name">
       
    </div>
</template>
<script lang="ts" setup>
import { NTooltip } from "naive-ui";
defineProps({
    params: Object,
});
</script>
<style lang="scss" scoped>
.auth-query-name {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    justify-content: flex-start;
    align-items: center;

    .limit-img {
        width: 14px;
        height: 14px;
    }
}
</style>