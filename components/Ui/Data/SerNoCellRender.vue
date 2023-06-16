
<template>
  <div class="ser-no">
    
  </div>
</template>
<script lang="ts" setup>
import { NPopover} from "naive-ui";
const props = defineProps({
params: Object,
});

</script>
<style lang="scss" scoped>
.ser-no {
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 0 5px;
  color: #1d2129;
  font-size: 14px;
  font-family: ui-sans-serif;
}
.ser-no-link {
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 0 5px;
  color: #165DFF;
  font-size: 14px;
  font-family: ui-sans-serif;
  cursor: pointer;
}
.ser-no-link:hover {
  text-decoration: underline;
  text-decoration-color: #165DFF;
}
.color-tip{
  top: -32px;
  right: -20px;
  width: 0;
  height: 0;
  border-bottom-color: transparent;
  border-top-color: transparent;
  border-left-color: transparent;
  transform: rotateZ(135deg);
  @apply absolute;
}
.success{
  border: 20px solid #018d1d;
}
.error{
  border: 20px solid #F53F3F;
}
.warning{
  border: 20px solid #F7BA1E;
}
.overdue{
  border: 20px solid #165DFF;
}
.info{
  border: 20px solid #C9CDD4;
}
</style>
