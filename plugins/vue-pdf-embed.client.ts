
import VuePdfEmbed from "vue-pdf-embed";
export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp._provide_vue_pdf_embed !== true) {
    nuxtApp._provide_vue_pdf_embed = true;
    nuxtApp.vueApp.component("vue-pdf-embed", VuePdfEmbed);
  }
});
