import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

// https://astro.build/config
export default defineConfig({
  site: 'https://terales.github.io',
  base: 'blackbird-docs',
  integrations: [
    starlight({
      title: {
        en: 'Blackbird docs',
        'nl-NL': 'Blackbird documentatie',
        'hu-HU': 'Blackbird dokumentáció',
        'uk-UA': 'Документація Blackbird',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'nl': {
          label: 'Nederlands',
          lang: 'nl-NL',
        },
        'hu': {
          label: 'Magyar',
          lang: 'hu-HU',
        },
        'uk': {
          label: 'Українська',
          lang: 'uk-UA',
        },
      },
      customCss: ["./src/styles/custom.css"],
      logo: {
        light: "./src/assets/light-logo.svg",
        dark: "./src/assets/dark-logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/bb-io",
      },
      plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
            base: "api",
            label: "Blacbird API",
            schema: "./schemas/openapi.json",
          },
        ]),
      ],
      sidebar: [
        {
          label: "Learning to fly",
          autogenerate: { directory: "learning-to-fly" },
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "SDK",
          autogenerate: { directory: "sdk" },
        },
        {
          label: "Eggs",
          autogenerate: { directory: "eggs" },
        },
        {
          label: "More",
          autogenerate: { directory: "more" },
        },
        ...openAPISidebarGroups,
        {
          label: "Apps",
          autogenerate: { directory: "apps" },
        },
      ],
    }),
  ],
});
