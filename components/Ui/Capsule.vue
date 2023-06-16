<template>
  <div ref="capsuleWidthRef"
  
  >
    
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted, reactive } from "vue";
</script>
<style scoped>
.notAllowed{
  /* pointer-events: none; */
  cursor: not-allowed;
}
.capBox{
  background-color: #f8f8f8;
}
.searchBtn{
  color: #4E5969;
  background: #F0F0F0;
  border-radius: 16px;
  @apply mb-12px inline-block mr-20px cursor-pointer px-16px py-7px;
}
.searchBtn:hover{
  background: #e7e7e7;
}
.currentBtn{
  background: #2080f0;
  color: #fff;
}
.currentBtn:hover{
  background: #4696f0;
}
.fixtop{
  position: absolute;
  top: 0px;
  right: -30px;
  background-color: #f8f8f8;
}
.animationWidth1{
    width: 100%;
    height: 48px;
}
.animationWidth2{
  width: 100%;
  height: v-bind('currentH');
  animation:animationWidth2 1s infinite;
  animation-iteration-count: 1;
}
@keyframes animationWidth2 {
  0%   {height: 48px}
  100% {height: 130px}
}
.animationWidth3{
  width: 100%;
  height: v-bind('currentH');
}
.animationWidth4{
  width: 100%;
  height: 48px;
  animation:animationWidth4 1s infinite;
  animation-iteration-count: 1;
}
@keyframes animationWidth4 {
  0%   {height: v-bind('currentH')}
  100% {height: 48px}
}
</style>
