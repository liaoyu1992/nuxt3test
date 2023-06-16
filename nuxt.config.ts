
import { defineNuxtConfig } from "nuxt/config";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  auth: {
    isEnabled: true,
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true,
    enableSessionRefreshPeriodically: 30000,
    enableSessionRefreshOnWindowFocus: true,
    basePath: "/api/auth",
    defaultProvider: "xin",
  },
  app: {
    head: {
      title: "system",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/app.ico",
        },
        {
          rel: "shortcut icon",
          href: "/app.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/app.ico",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          media: "print",
          href: "/print-lock.css",
        },
      ],
    },
  },
  css: ["@/assets/styles/index.scss"],
  modules: [
    "nuxt-windicss",
    "@pinia/nuxt",
    "@sidebase/nuxt-auth",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./i18n/config", // if you are using custom path, default
  },
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "echarts",
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
            "date-fns",
            "resize-detector",
            "vue-echarts",
          ]
        : [
            "@juggle/resize-observer",
            "echarts",
            "vue-echarts",
            "resize-detector",
          ],
  },
  experimental: {
    externalVue: false,
  },
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "assets/images")],
        symbolId: "icon-[dir]-[name]",
      }),
      visualizer({
        emitFile: false,
        file: "stats.html",
        open: true, 
      }),
    ],
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : ["echarts", "vue-echarts"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            "@import '@/assets/styles/colors.scss';@import '@/assets/styles/size.scss';",
        },
      },
    },
    build: { minify: false, sourcemap: false },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "",
      packageMode: process.env.PACKAGE_MODE || "",
    },
    auth: {
      AUTH_SECRET: process.env.AUTH_SECRET || "",
      CLIENT_ID: process.env.CLIENT_ID || "",
      CLIENT_SECRET: process.env.CLIENT_SECRET || "",
      AUTHORIZE_URI: process.env.AUTHORIZE_URI || "",
      TOKEN_URI: process.env.TOKEN_URI || "",
      REDIRECT_URI: process.env.REDIRECT_URI || "",
      USER_INFO_URI: process.env.USER_INFO_URI || "",
      SCOPE: process.env.SCOPE || "",
    },
  },
  nitro: {
    minify: true,
    sourceMap: false,
  },
});
