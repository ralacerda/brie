import { defineConfig } from "vite";
import { resolve } from "pathe";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "iconify-icon",
        },
      },
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "open-props/style";`,
      },
    },
  },
});
