<template>
  <div class="editContent">
           
        </div>
</template>

<script setup lang="ts">
import { NButton, NModal, NCard, useMessage } from "naive-ui";
import {ComponentInternalInstance, reactive, ref, watch} from 'vue';


</script>

<style scoped lang="scss">
.editContent{
  @apply flex flex-col h-[100%] p-[18px] pb-[15px];
  // width: 100vw;
}
.editTab{
  @apply flex justify-between;
  flex:0 0 60px;
}
.editTab button{
  margin-left: 12px;
}
.editItems{
  @apply flex justify-between;
  flex: 1;
}
.editR{
  @apply flex flex-col;
  width: 64%;
}
.editL{
    width: 35%;
}
.points{
  @apply flex justify-between px-[15px] py-[20px] rounded-[4px];
}
.points:hover{
    background-color: rgb(245, 245, 245);
}
.point_right{
    flex:1;
    font-size: 16px;
}
.point_right:first-child{
    margin-bottom: 4px;
}
.point_right:last-child{
    color: #8b8b8b;
}
.point_left{
  @apply text-[14px] flex justify-end;
  flex: 0 0 22%;
  color: #adadad;
}
.hasAdd{
  cursor: not-allowed;
}
.hasNotAdd{
  color:#1b9aee ;
  cursor:pointer;
}
</style>
