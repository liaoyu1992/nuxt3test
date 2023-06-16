import en from "@/locales/en";
import zh from "@/locales/zh";
const message = { en, zh };
export default defineI18nConfig(() => ({
  legacy: false,
  silentTranslationWarn: true,
  globalInjection: true,
  warnHtmlMessage: false,
  fallbackLocale: "en",
  locale: "zh",
  locales: ["zh", "en"],
  messages: message,
}));