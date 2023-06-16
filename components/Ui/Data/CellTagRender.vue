
<template>
  <n-tag
    :type="getTagType()"
    :color="
      props.params?.data?.viewTagType === 'success' ||
      props.params?.tagType === 'success'
        ? { color: '#E7F5EE', borderColor: '#A8DBC1', textColor: '#18a058' }
        : undefined
    "
    >{{ props.params?.data?.viewTagValue ?? props.params?.value }}
  </n-tag>
</template>
<script lang="ts" setup>
import { NTag } from "naive-ui";
const props = defineProps({
  params: Object,
});

const getTagType = () => {
  console.log(props.params);
  return props.params?.data?.viewTagType ?? props.params?.colDef.tagType;
};
</script>
<style lang="scss" scoped></style>
