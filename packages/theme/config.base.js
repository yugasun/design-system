const modes = ["light", "dark"];

module.exports = {
    source: [
        // this is saying find any files in the tokens folder
        // that does not have .dark or .light, but ends in .json
        `tokens/base/!(*.${modes.join(`|*.`)}|*.transient).json`,
        `tokens/base/**/*.json`,
    ],
    platforms: {
        web: {
            transformGroup: "css",
            prefix: "yg",
            buildPath: "build/theme/",
            files: [
                {
                    format: "css/variables",
                    destination: "base.css",
                    options: {
                        outputReferences: true,
                        showFileHeader: false,
                    },
                    filter(token) {
                        return !token.colorScheme && token.transient !== true;
                    },
                },
            ],
            actions: ["copy_assets"],
        },
    },
    modes,
};
