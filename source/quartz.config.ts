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
          light: "#fff3e0", // Light peach background
          lightgray: "#ffe0b2", // Light orange
          gray: "#d1c4e9", // Light lavender gray
          darkgray: "#a1887f", // Soft brown
          dark: "#6d4c41", // Dark brown
          secondary: "#ffab40", // Bright orange
          tertiary: "#ba68c8", // Light purple
          highlight: "rgba(255, 138, 101, 0.15)", // Light pastel orange highlight
          textHighlight: "#ffcc80", // Soft pastel orange text highlight
        },
        darkMode: {
          light: "#4a148c", // Dark purple
          lightgray: "#6a1b9a", // Purple
          gray: "#8e24aa", // Medium purple
          darkgray: "#d1c4e9", // Light lavender gray
          dark: "#f3e5f5", // Lightest lavender
          secondary: "#ffab40", // Bright orange
          tertiary: "#ba68c8", // Light purple
          highlight: "rgba(255, 138, 101, 0.15)", // Light pastel orange highlight
          textHighlight: "#ffcc80", // Soft pastel orange text highlight
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
