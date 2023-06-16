
<template>
   <div style="width:100%;height:100%;" class="flex flex-col">
     <n-card v-for="i in 5" :key="`keys${i}`" class="mb-5" style="flex:1">
        <n-skeleton  text :repeat="2"/>
    </n-card>
   </div>
</template>
<script lang="ts" setup>
import { NCard, NSkeleton } from "naive-ui"
</script>
