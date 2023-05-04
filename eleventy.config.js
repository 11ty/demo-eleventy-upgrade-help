const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
  // eleventyConfig.setServerPassthroughCopyBehavior("copy");

  eleventyConfig.addPlugin(EleventyRenderPlugin, {
    tagName: "customizedRenderTemplate"
  });
  eleventyConfig.addDataExtension("txt", () => ({}));

  // eleventyConfig.ignores.add("dlskjfkljdsj");

  // eleventyConfig.setBrowserSyncConfig();

  // This needs to be the last plugin
  eleventyConfig.addPlugin(UpgradeHelper);
};
