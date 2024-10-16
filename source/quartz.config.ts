import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🚀 Dungeons & Debris",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f0f8ff", // Pastel Alice Blue (Background light color)
          lightgray: "#e0e7ff", // Pastel Light Blue Gray (Light gray elements)
          gray: "#c0c4e1", // Pastel Gray (Gray elements)
          darkgray: "#a0a4b8", // Pastel Dark Gray (Dark gray elements)
          dark: "#d1d5db", // Pastel Light Gray (Dark background)
          secondary: "#a7c6ed", // Pastel Galactic Blue (Secondary Accent)
          tertiary: "#d6a6e0", // Pastel Nebula Purple (Primary Accent)
          highlight: "rgba(255, 228, 225, 0.15)", // Pastel Subtle highlight
          textHighlight: "#ffb3d1", // Pastel Cosmic Pink (Highlight)
        },
        darkMode: {
          light: "#2a2d34", // Dark pastel background light color
          lightgray: "#4b4e56", // Dark pastel gray elements
          gray: "#6c6f78", // Dark pastel gray elements
          darkgray: "#d9d9d9", // Light pastel gray elements
          dark: "#f0f0f0", // Light pastel background
          secondary: "#b2e0b2", // Pastel Planetary Green (Buttons/Links)
          tertiary: "#ffb3b3", // Pastel Solar Flare Orange (Alerts/Notifications)
          highlight: "rgba(255, 228, 225, 0.15)", // Pastel Subtle highlight
          textHighlight: "#ffffff", // Pastel Starlight White (Text)
        },
      },

    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
