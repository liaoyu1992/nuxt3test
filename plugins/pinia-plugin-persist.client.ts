
import { defineNuxtPlugin } from "#app";
import piniaPersist from "pinia-plugin-persist";

export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp._use_pinia !== true) {
    nuxtApp._use_pinia = true;
    //这个地方需要$pinia进行挂载
    nuxtApp.$pinia.use(piniaPersist);
  }
});
