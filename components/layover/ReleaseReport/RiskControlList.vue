
<template>
  <div class="h-full flex justify-between flex-col">
   
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { format, parseISO } from "date-fns";

</script>
<style lang="scss" scoped>
.reportTable {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border-spacing: 0;
  text-align: center;
  td {
    border: 2px solid black;
    padding: 10px;
  }
}
.fillingBlank {
  text-decoration: underline;
  padding: 0 5px;
}
.customerOrder {
  text-decoration: underline;
}
.serialNo {
  display: inline-block;
  width: 30px;
}
.signBlank {
  min-width: 200px;
  display: inline-block;
  border-bottom: 1pt solid black;
}
</style>
