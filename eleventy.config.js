const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

module.exports = function (eleventyConfig) {
    const output = 'public'

    eleventyConfig.addPlugin(EleventyVitePlugin, {
        viteOptions: {
            // Must be different than Eleventy's output directory.
            publicDir: `_${output}`
        }
    })

    eleventyConfig.addPassthroughCopy({ './site/static': '/' })

    return {
        dir: {
            output,
            includes: '_includes',
            input: 'site',
        },
    }
}
