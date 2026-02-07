import type { StarlightUserConfig } from "@astrojs/starlight/types";

/**
 * Starlight i18n configuration.
 * @see https://starlight.astro.build/reference/configuration/#locales
 */
export const locales = {
  en: { label: "English", lang: "en", dir: "ltr" },
  es: { label: "Español", lang: "es", dir: "ltr" },
} satisfies StarlightUserConfig["locales"];
