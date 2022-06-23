const base = require("./config.base");

const config = {
    ...base,
    source: [`tokens/fonts/*.json`],
};
config.platforms.web.files = [
    {
        format: "css/variables",
        destination: "fonts.css",
        options: {
            outputReferences: true,
            showFileHeader: false,
        },
    },
];

module.exports = config;
