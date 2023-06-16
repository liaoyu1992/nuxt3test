<!--
 * @Description: 课程选择组件
 * @version:
 * @Author: zhouliping
 * @Date: 2022-11-15 14:38:46
 * @LastEditors: zhouliping
 * @LastEditTime: 2023-06-12 17:51:09
-->
<template>
  <div>
    <span @click="showMemberModal">
      <slot name="click"></slot>
    </span>
    <n-modal :mask-closable="false" :show="memberModalRef" preset="card" :segmented="segmented" style="width: 960px"
      :bordered="false" @update:show="memberModalRef = false">
      <template #header>
        <div class="font-400" style="text-align: center; width: auto">
          {{ $t('train.courseSelect') }}
        </div>
      </template>
      <div>
        <div class="flex items-center">
          <expansion-form ref="expansionForm" :formData="searchForm" :formDesc="formDesc1" :submit="search"
            :reset="cleanHandler" v-if="props.architecture != ''" />
          <expansion-form ref="expansionForm" :formData="searchForm" :formDesc="formDesc" :submit="search"
            :reset="cleanHandler" v-else />
         
        </div>
        <div class="h-700px w-full">
          <loading-group :pending="pending" :error="error">
            <ui-data-grid ref="selectCourse" grid-key="selectCourse_course_v1" :multiple="props.multiple"
              :columns="memberRowRef" :checked="true" :data="memberData" :pagination="pagination"
              :minHeight="500"></ui-data-grid>
          </loading-group>
        </div>
      </div>
      <template #action>
        <div style="display: flex; justify-content: flex-end">
          <n-button @click="closeMemberModal" class="mr-10">{{ $t("name.cancel") }}</n-button>
          <n-button type="info" @click="chooseMember">{{  $t("name.confirm") }}</n-button>
        </div>
      </template>
    </n-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  NIcon,
  FormInst,
  NForm,
  NFormItem,
  NButton,
  NInput,
  NModal,
} from "naive-ui";

import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
const { t } = useI18n();
const trainStore = useTrainStore();
const { courseManageApi, filedManageApi } = useTrainApi();
const { getCourseCode } = useUtil()
const segmented: any = {
  content: "soft",
  footer: "soft",
};
let props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Array,
    default: [],
  },
  selectedIds: {
    type: Array,
    default: () => [],
  },
  state: {
    type: String,
    default: ""
  },
  retrainCourse: {
    type: Number,
    default: 0
  },
  architecture: {
    type: String,
    default: ""
  }
});

const emits = defineEmits(["update:modelValue", "confirm"]);
const propsMessage = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emits("update:modelValue", val);
  },
});
const searchFormRef = ref<FormInst | null>(null);
let systemArr: any = [];
const searchForm = ref({
  name: null,
  systemId: null
});
watchEffect(() => {
  filedManageApi.list({ dataType: "applicableSystem" }).then((res) => {
    res.data.value?.data.forEach((item) => {
      systemArr.push({
        label: item.name,
        value: item.id,
        disabled: item.isExpired == "1" ? true : false,
      });
    });
  });
  searchForm.value.systemId = systemArr.find((ele) => ele.label == props.architecture)?.value
})
// 搜索类型
const formDesc1 = ref([
  {
    colSpan: 2,
    label: "train.courseName",
    type: "input",
    path: "name",
  },
  {
    colSpan: 2,
    label: "train.systemApply",
    type: "select",
    path: "systemId",
    option: systemArr
  },
]);
const formDesc = ref([
  {
    colSpan: 2,
    label: "train.courseName",
    type: "input",
    path: "name",
  },
]);
const search = () => {
  listMember();
};
const cleanHandler = () => {
  for (let key in searchForm.value) {
    searchForm.value[key] = null
  }
}

const selectCourse = ref();
const memberModalRef = ref(false);
const showMemberModal = () => {
  memberModalRef.value = true;
  searchForm.value.systemId = systemArr.find((ele) => ele.label == props.architecture)?.value
  listMember();
};
const closeMemberModal = () => {
  memberModalRef.value = false;
};
const chooseMember = () => {
  let members = selectCourse.value.getSelectedRows();
  propsMessage.value = members;
  emits("confirm", members);
  selectCourse.value.clearSelectRows()
  closeMemberModal();
};
const error = ref(false);
const pending = ref(false);
const memberRowRef = ref([
  {
    headerName: t("train.system"),
    headerValueGetter: () => t("train.system"),
    field: "systemObj",
    minWidth: 150,
    width: 150,
    sortable: true,
    cellRenderer: (params) => {
      if (params.data.systemObj && params.data.systemObj.length != 0 && params.data.systemObj[0] != null) {
        let systemObjName = params.data.systemObj.map((item) => {
          return item.name
        })
        return systemObjName.join(',');
      } else {
        return '-'
      }
    },
  },
  {
    headerName: t("train.courseType"),
    headerValueGetter: () => t("train.courseType"),
    field: "courseTypeFirstLevel",
    minWidth: 150,
    width: 150,
    sortable: true,
    cellRenderer: (param) => {
      if (param.data.courseTypeFirstLevel == "0") {
        return '非大纲类型'
      } else if (param.data.courseTypeFirstLevel == "1") {
        return '大纲类型'
      }
    }
  },
  {
    headerName: t("train.trainCode"),
    headerValueGetter: () => t("train.trainCode"),
    field: "codeObj",
    minWidth: 150,
    width: 150,
    sortable: true,
    cellRenderer: (params) => {
      return getCourseCode(params.data.courseSourceObj?.name, params.data.sequenceNumber, params.data.codeObj?.name, params.data.hasPipe, params.data.retrainCourse)
    },
  },
  {
    headerName: t("train.courseName"),
    headerValueGetter: () => t("train.courseName"),
    field: "nameCn",
    minWidth: 150,
    width: 150,
    sortable: true,
    autoHeight: true,
    wrapText: true,
    cellRenderer: (params) => {
      return `<div style="display: flex;flex-direction:column;justify-content:center;align-items:center;color:blue;font-size:12px"><p style="line-height:20px">${params.data.nameCn}</p><p style="line-height:20px">${params.data.nameEn}</p></div>`;
    },
  },
  {
    headerName:  t("train.courseTotalHour"),
    headerValueGetter: () => t("train.courseTotalHour"),
    field: "courseContentHour",
    minWidth: 150,
    width: 150,
    sortable: true,
    cellRenderer: (params) => {
      return `${params.data.courseContentHour}+${params.data.assessHour}`;
    },
  },
]);
const memberData = ref([]);
const pageRef = ref(1);
const pageSizeRef = ref(10);
const pagination = ref({
  totalElements: 0,
  pageSizes: [10, 20, 50, 100, 500, 1000],
  pageChange: (page) => {
    pageRef.value = page;
    listMember();
  },
  pageSizeChange: (pageSize) => {
    pageRef.value = 1;
    pageSizeRef.value = pageSize;
    listMember();
  },
});
// 查询课程信息
const listMember = () => {
  let params = {
    ...searchForm.value,
    state: props.state,
    page: pageRef.value - 1,
    size: pageSizeRef.value,
    retrainCourse: props.retrainCourse
  };
  if (searchForm.value.name) {
    params.name = searchForm.value.name;
  }
  if (props.retrainCourse = 2) {
    delete params.retrainCourse
  }
  courseManageApi
    .list(params)
    .then((res) => {
      pagination.value.totalElements = res.data.value?.data.totalElements;
      memberData.value = res.data.value?.data.content;
      setTimeout(() => {
        selectCourse.value.setSelectedFilters(
          (node) => props.selectedIds.indexOf(node.data.id) !== -1
        );
      }, 100);
    })
    .catch((error) => { })
    .finally(() => {
      pending.value = false;
    });
};
</script>
<style lang="scss" scoped>
.gridTable {
  height: 1000px;
  flex: 1;
}

.tableWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
