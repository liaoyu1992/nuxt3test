


<template>
  <div class="monthGrid w-full">
    
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watchEffect } from "vue";
import { parseISO, startOfMonth, endOfMonth, differenceInDays, startOfWeek, endOfWeek, addDays, format, isSameDay } from "date-fns"

</script>

<style lang="scss" scoped>
.monthGrid {
  display: grid;
  grid-template-columns: repeat(7, calc(1/7*100%));
  // grid-template-columns: repeat(7, 1/7*100%);
}

.tabelHeader {
  @apply bg-gray-300 h-50px flex justify-center items-center
}
</style>