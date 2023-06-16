
<template>
  <div class="error-page">
    
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.error-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .error-icon {
    height: 5em;
    width: 5em;
    line-height: 1em;
    text-align: center;
    display: inline-block;
    position: relative;
    fill: currentColor;
    transform: translateZ(0);
  }

  .error-icon svg {
    height: 5em;
    width: 5em;
  }

  .error-button{
    border: 1px solid#333333;
    border-radius: 0.2em;
    padding: 0.2em 0.5em;
  }
}
</style>
