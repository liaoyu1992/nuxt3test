
import { defineNuxtPlugin } from "#app";
import GridHeader from "@/components/Ui/Data/GridHeader.vue";
import SerNoCellRender from "@/components/Ui/Data/SerNoCellRender.vue";
import ControllerActionRender from "@/components/Ui/Data/ControllerActionRender.vue";
import SysSetImgPreview from "@/components/SysSet/ImgPreview.vue";
import AuthQueryNameRender from "@/components/Ui/Data/AuthQueryNameRender.vue";
import PercentRender from "@/components/Ui/Data/PercentRender.vue";
import CellTipsRender from "@/components/Ui/Data/CellTipsRender.vue";
import ActionHeader from "@/components/Ui/Data/ActionHeader.vue";
import SwitchActionRender from "@/components/Ui/Data/SwitchActionRender.vue";
import ActionRender from "@/components/Ui/Data/ActionRender.vue";
import CellTagRender from "@/components/Ui/Data/CellTagRender.vue";
import SapCellRender from "@/components/mat/control/modules/SapCellRender.vue";
import GcamStockCellRender from "@/components/mat/control/modules/GcamStockCellRender.vue";
import CellImageRender from "@/components/Ui/Data/CellImageRender.vue";
export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp._use_components !== true) {
    nuxtApp._use_components = true;
    nuxtApp.vueApp.component("GridHeader", GridHeader);
    nuxtApp.vueApp.component("SerNoCellRender", SerNoCellRender);
    nuxtApp.vueApp.component("ControllerActionRender", ControllerActionRender);
    nuxtApp.vueApp.component("SysSetImgPreview", SysSetImgPreview);
    nuxtApp.vueApp.component("AuthQueryNameRender", AuthQueryNameRender);
    nuxtApp.vueApp.component("PercentRender", PercentRender);
    nuxtApp.vueApp.component("CellTipsRender", CellTipsRender);
    nuxtApp.vueApp.component("ActionHeader", ActionHeader);
    nuxtApp.vueApp.component("SwitchActionRender", SwitchActionRender);
    nuxtApp.vueApp.component("ActionRender", ActionRender);
    nuxtApp.vueApp.component("CellTagRender", CellTagRender);
    nuxtApp.vueApp.component("SapCellRender", SapCellRender);
    nuxtApp.vueApp.component("GcamStockCellRender", GcamStockCellRender);

    // nuxtApp.vueApp.component("ConfirmActionRender", ConfirmActionRender);
    nuxtApp.vueApp.component("CellImageRender", CellImageRender);
  }
});
