
<template>
    <div class="myProcess">
        {{ params.data.personName }}
      <n-progress
        type="line"
        :percentage="params.data.percent"
        :indicator-placement="'inside'"
        processing
      />
    </div>
</template>
<script lang="ts" setup>
import { NProgress } from "naive-ui";
defineProps({
    params: Object,
});
</script>
<style lang="scss" scoped>

</style>
