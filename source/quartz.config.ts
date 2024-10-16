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
          light: "#faf8f8", // Background light color
          lightgray: "#e5e5e5", // Light gray elements
          gray: "#b8b8b8", // Gray elements
          darkgray: "#4e4e4e", // Dark gray elements
          dark: "#2b2b2b", // Dark background
          secondary: "#1E90FF", // Galactic Blue (Secondary Accent)
          tertiary: "#6A0DAD", // Nebula Purple (Primary Accent)
          highlight: "rgba(143, 159, 169, 0.15)", // Subtle highlight
          textHighlight: "#FF1493", // Cosmic Pink (Highlight)
        },
        darkMode: {
          light: "#161618", // Dark background light color
          lightgray: "#393639", // Dark gray elements
          gray: "#646464", // Gray elements
          darkgray: "#d4d4d4", // Light gray elements
          dark: "#ebebec", // Light background
          secondary: "#32CD32", // Planetary Green (Buttons/Links)
          tertiary: "#FF4500", // Solar Flare Orange (Alerts/Notifications)
          highlight: "rgba(143, 159, 169, 0.15)", // Subtle highlight
          textHighlight: "#FFFFFF", // Starlight White (Text)
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
