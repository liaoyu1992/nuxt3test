
import mitt from "mitt";

export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp._provide_emitter !== true) {
    nuxtApp._provide_emitter = true;
    const emitter = mitt();
    nuxtApp.provide("emitter", emitter);
  }
});
