// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { locales } from "./config/locales";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Liko UI",
      description: "UI Component library with Astro, for Astro, used in all JCTechStudio projects.",
      logo: {
        light: "./src/assets/liko-ui-logo-light.webp",
        dark: "./src/assets/liko-ui-logo-dark.webp",
        alt: "Liko UI",
      },
      editLink: {
        baseUrl: "https://github.com/JCTechStudio/liko-ui/tree/main/apps/docs",
      },
      sidebar: [
        {
          label: "Getting Started",
          translations: { "es": "Primeros pasos" },
          autogenerate: {
            directory: "getting-started",
          },
        },
        {
          label: "Components",
          translations: { "es": "Componentes" },
          autogenerate: {
            directory: "components",
          },
        },
      ],
      locales,
      defaultLocale: "en",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/JCTechStudio/liko-ui" }],
      customCss: ["./src/styles/global.css"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            size: "16x16",
          },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
