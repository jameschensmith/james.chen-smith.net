module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ './site/static': '/' })

    return {
        dir: {
            includes: '_includes',
            input: 'site',
            output: 'public',
        },
    }
}
