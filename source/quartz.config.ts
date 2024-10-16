import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🚀  Dungeons & Debris",
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
          light: "#f9f9f9", // Soft white
          lightgray: "#f0f4f8", // Very light gray
          gray: "#d1d5db", // Light gray
          darkgray: "#a1a1a1", // Soft gray
          dark: "#6b7280", // Muted dark gray
          secondary: "#a7c6ed", // Pastel blue
          tertiary: "#f6d6a6", // Pastel yellow
          highlight: "rgba(255, 182, 193, 0.15)", // Light pastel pink highlight
          textHighlight: "#ffeb3b88", // Soft pastel yellow text highlight
        },
        darkMode: {
          light: "#2d2d2d", // Dark background
          lightgray: "#4a4a4a", // Darker gray
          gray: "#646464", // Medium gray
          darkgray: "#d4d4d4", // Light gray for dark mode
          dark: "#ebebec", // Lightest gray for dark mode
          secondary: "#7b97aa", // Muted pastel blue
          tertiary: "#f6d6a6", // Pastel yellow
          highlight: "rgba(255, 182, 193, 0.15)", // Light pastel pink highlight
          textHighlight: "#ffeb3b88", // Soft pastel yellow text highlight
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
