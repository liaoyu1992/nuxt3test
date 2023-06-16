
import { createI18n } from "vue-i18n";
import en from "@/locales/en";
import zh from "@/locales/zh";
const message = { en, zh };
const i18n = createI18n({
  legacy: false,
  silentTranslationWarn: true,
  globalInjection: true,
  warnHtmlMessage: false,
  fallbackLocale: "en",
  locale: "en",
  messages: message,
});
export default i18n;
