
<template>
  <div id="calendar" class="w-full h-full"></div>
</template>
<script lang="ts" setup>
import { onUnmounted, computed } from "vue";
import "bootstrap-icons/font/bootstrap-icons.css";
const emits = defineEmits([
  "eventClick",
  "eventDrop",
  "eventDragStop",
  "eventDragStart",
  "eventChange",
  "eventMouseEnter",
  "eventMouseLeave",
  "changeInitialView",
]);
const props = defineProps({
  resourceAreaColumns: {
    type: Array,
    default: [],
  },
  resources: {
    type: Array,
    default: [],
  },
  events: {
    type: Array,
    default: [],
  },
  resourceOrder: {
    type: Array,
    default: [],
  },
  taskListWidth: {
    type: String,
    default: "25%",
  },
  displayEventTime: {
    type: Boolean,
    default: false,
  },
  resourceTimeline: {
    type: String,
    default: "resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth",
  },
  headerToolbar: {
    type: Object,
    default: {
      left: `today prev,next`,
      center: "title",
      right: `resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth`,
    },
  },
  validRange: {
    type: Object,
    default: undefined,
  },
  themeSystem: {
    type: String,
    default: "bootstrap5",
  },
  editable: {
    type: Boolean,
    default: true,
  },
  eventContent: {
    type: Function,
  },
  resourcesInitiallyExpanded: {
    type: Boolean,
    default: true,
  },
  resourceGroupField: {
    type: String,
    default: null,
  },
  eventDurationEditable: {
    type: Boolean,
    default: true,
  },
  initialView: {
    type: String,
    default: "resourceTimelineMonth",
  },
  initialDate: {
    type: String,
    default: null,
  },
  visibleRange: {
    type: Object,
    default: undefined
  },

});
const resourses = computed(() => {
  const resoursesDef = props.resources.map((ele) => {
    if (ele.eventColor) {
      var color = ele.eventColor;
      ele.eventColor = color.colorRgb();
    }
    if (ele.backgroundColor) {
      ele.backgroundColor = ele.backgroundColor.colorRgb();
    }
    ele.eventBorderColor = "#ffffff00";
    depResourse(ele);
    return ele;
  });
  return resoursesDef;
});
const depResourse = (child) => {
  if (child) {
    if (child.children) {
      child.children.map((child) => {
        depResourse(child);
      });
    } else {
      if (child.eventColor) {
        var color = child.eventColor;
        child.eventColor = color.colorRgb();
      }
      if (child.backgroundColor) {
        child.backgroundColor = child.backgroundColor.colorRgb();
      }
      child.eventBorderColor = "#ffffff00";
      child.classNames = ["holiday-class"];
    }
  }
};
const eventsRef = computed(() => {
  const eventsDef =  props.events.map((ele) => {
    if (ele.eventColor) {
      var color = ele.eventColor;
      ele.eventColor = color.colorRgb();
    }
    if (ele.backgroundColor) {
      ele.backgroundColor = ele.backgroundColor.colorRgb();
    }
    return ele;
  });
  return eventsDef;
});
const calendar = ref();
const defaultOptions = ref({
  resourceOrder: props.resourceOrder,
  displayEventTime: props.displayEventTime,
  themeSystem: props.themeSystem,
  headerToolbar: props.headerToolbar,
  initialView: props.initialView,
  initialDate: props.initialDate,
  stickyHeaderDates: true,
  aspectRatio: 2.0,
  editable: props.editable,
  resourceAreaWidth: props.taskListWidth,
  eventMinHeight: 40,
  resourceAreaColumns: props.resourceAreaColumns,
  resources: resourses,
  events: eventsRef,
  validRange: props.validRange,
  views: props.views,
  visibleRange: props.visibleRange
});


const render = () => {
  calendar.value?.render();
};
const addResource = (resource) => {
  calendar.value?.addResource(resource);
};
const addEvent = (event) => {
  calendar.value?.addEvent(event);
};
const gotoDate = (date) => {
  calendar.value?.gotoDate(date);
};
const changeView = (startDate, endDate) => {
  calendar.value?.changeView("resourceTimeline", {
    start: startDate,
    end: endDate,
    slotDuration: { days: 1 },
  });
};
const eventClick = (info) => {
  emits("eventClick", info);
};
const eventMouseEnter = (info) => {
  emits("eventMouseEnter", info);
};
const eventMouseLeave = (info) => {
  emits("eventMouseLeave", info);
};
const eventDrop = (info) => {
  emits("eventDrop", info);
};
const eventDragStop = (info) => {
  emits("eventDragStop", info);
};
const eventDragStart = (info) => {
  emits("eventDragStart", info);
};
const eventChange = (info) => {
  emits("eventChange", info);
};
const resourceTimelineDay: string = "resourceTimelineDay";
const resourceTimelineWeek: string = "resourceTimelineWeek";
const resourceTimelineMonth: string = "resourceTimelineMonth";
const clickDay = () => {
  calendar.value?.changeView(resourceTimelineDay)
  emits("changeInitialView", resourceTimelineDay);
};
const clickWeek = () => {
  calendar.value?.changeView(resourceTimelineWeek)
  emits("changeInitialView", resourceTimelineWeek);
};
const clickMonth = () => {
  calendar.value?.changeView(resourceTimelineMonth)
  emits("changeInitialView", resourceTimelineMonth);
};
const refetchEventById = (eventId) => {
  let event = calendar.value?.getEventById(eventId);
  if (event) {
    event.source.refetch();
  }
};
const refetchEvents = () => {
  calendar.value?.removeAllEvents();
  calendar.value?.addEventSource(props.events);
};
const setToady = () => {
  var todayLabelParat = document.getElementsByClassName("fc-timeline-slot-label fc-day-today");
  if (todayLabelParat && todayLabelParat[0]) {
    if (todayLabelParat[0].children[0]) {
      var todayLabel = todayLabelParat[0].children[0];
      todayLabel.className = `${todayLabel.className} fc-day-today-display`
      const labelDiv = document.createElement("div");
      labelDiv.className = "fc-day-today-label";
      const labelLine = document.createElement("div");
      labelLine.className = "fc-day-today-label-line";
      labelDiv.appendChild(labelLine);
      todayLabel.insertBefore(labelDiv, todayLabel.children[0]);
    }

  }
  var todaylane = document.getElementsByClassName("fc-timeline-slot-lane fc-day-today");
  if (todaylane && todaylane[0]) {
    const laneDiv = document.createElement("div");
    laneDiv.className = "fc-day-today-lane";
    const laneLine = document.createElement("div");
    laneLine.className = "fc-day-today-lane-line";
    laneDiv.appendChild(laneLine);
    todaylane[0].insertBefore(laneDiv, todaylane[0].children[0]);
  }
};
onMounted(async () => {
  await import("@fullcalendar/core/vdom");
  const { Calendar } = await import("@fullcalendar/core");
  const resourceTimelinePlugin = await import("@fullcalendar/resource-timeline");
  const bootstrap5Plugin = await import("@fullcalendar/bootstrap5");
  const interactionPlugin = await import("@fullcalendar/interaction");
  const zhLocale = await import("@fullcalendar/core/locales/zh-cn");
  var calendarEl = document.getElementById("calendar");
  var options = { ...defaultOptions.value }
  if (props.resourceGroupField) {
    options = { ...options, resourceGroupField: props.resourceGroupField };
  }
  calendar.value = new Calendar(calendarEl, {
    eventClick: eventClick,
    eventDrop: eventDrop,
    eventDragStop: eventDragStop,
    eventDragStart: eventDragStart,
    eventChange: eventChange,
    eventMouseEnter: eventMouseEnter,
    eventMouseLeave: eventMouseLeave,
    eventContent: props.eventContent,
    resourcesInitiallyExpanded: props.resourcesInitiallyExpanded,
    eventDurationEditable: props.eventDurationEditable,
    plugins: [
      resourceTimelinePlugin.default,
      interactionPlugin.default,
      bootstrap5Plugin.default,
    ],
    locale: zhLocale.default,
    ...options,
  });
  calendar.value.render();
  calendar.value.setOption("themeSystem", props.themeSystem);
  setToady();
});
String.prototype.colorRgb = function () {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var color = this.toLowerCase();
  if (reg.test(color)) {
    if (color.length === 4) {
      var colorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    var colorChange = [];
    for (var i = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
    }
    return "rgba(" + colorChange.join(",") + ",0.6)";
  } else {
    return color;
  }
};
onUnmounted(() => {
  calendar.value?.destroy();
});
defineExpose({
  render,
  addResource,
  addEvent,
  eventMouseEnter,
  eventMouseLeave,
  refetchEventById,
  refetchEvents,
  changeView,
  gotoDate,
});
</script>
<style lang="scss" scoped>
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #f5f5f5;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-2xl: 2rem;
  --bs-border-radius-pill: 50rem;
  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;
  --bs-code-color: #d63384;
  --bs-highlight-bg: #fff3cd;
}

#calendar {
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
}
:deep(.fc-view-harness) {
  flex: 1;
}
:deep(.fc-theme-bootstrap5) {
  $--bs-gray-400: #f5f5f5;
}

:deep(.btn) {
  --bs-btn-padding-y: 0.28rem;
  --bs-btn-border-radius: 0.2rem;
}

:deep(.holiday-class) {
  background-image: linear-gradient(-45deg, white 25%, #f6f5ec 0, #f6f5ec 50%, white 0, white 75%, #f6f5ec 0);
  background-size: 10px 10px;
}

:deep(.bootstrap5 td) {
  border-color: #f5f5f5;
}

:deep(.fc-timeline-event-harness) {
  border-radius: 3px;
}

:deep(.fc-timeline-event) {
  border-radius: 3px;
}

:deep(.fc-day-sat) {
  background-image: linear-gradient(-45deg, white 25%, #f6f5ec 0, #f6f5ec 50%, white 0, white 75%, #f6f5ec 0);
  background-size: 10px 10px;
}

:deep(.fc-day-sun) {
  background-image: linear-gradient(-45deg, white 25%, #f6f5ec 0, #f6f5ec 50%, white 0, white 75%, #f6f5ec 0);
  background-size: 10px 10px;
}

:deep(.fc-day-today-label) {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

:deep(.fc-day-today-label-line) {
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 30px solid #1677ff;
  opacity: 0.6;
  border-radius: 50%;
  z-index: 0;
}

:deep(.fc-day-today-lane) {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

:deep(.fc-day-today-lane-line) {
  width: 1px;
  height: 100%;
  background-color: #1677ff;
  opacity: 0.6;
}

:deep(.fc-day-today-display) {
  position: relative;
}
</style>
