const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
// const {EleventyRenderPlugin, EleventyI18nPlugin, EleventyHtmlBasePlugin} = require("@11ty/eleventy");
// console.log( EleventyRenderPlugin, EleventyI18nPlugin, EleventyHtmlBasePlugin );

module.exports = async function(eleventyConfig) {
  // const {EleventyRenderPlugin, EleventyI18nPlugin, EleventyHtmlBasePlugin} = await import("@11ty/eleventy");

  // Removed Plugins
  // const { EleventyServerlessBundlerPlugin, EleventyEdgePlugin } = await import("@11ty/eleventy");
  // eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin);
  // eleventyConfig.addPlugin(EleventyEdgePlugin);

  // Aliases
  // eleventyConfig.addExtension("markdown", {
  //   key: "md"
  // })

  // Removed template syntaxes
  eleventyConfig.addExtension("pug", {
    compile: () => {},
    compileOptions: {
      permalink: "raw"
    }
  })

  // This needs to be the last plugin
  eleventyConfig.addPlugin(UpgradeHelper);

  return {
    // templateFormats: "md,markdown",
    // dir: {
    //   input: ".",
    //   output: ".",
    // },
    // htmlOutputSuffix: "-o"
  }
};

module.exports.config = {
  dir: {
    input: "src"
  }
}