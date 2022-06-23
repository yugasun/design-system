const base = require("./config.base");

const config = {
    ...base,
    source: [`tokens/icons/*.json`],
};
config.platforms.web.files = [
    {
        format: "css/variables",
        destination: "icons.css",
        options: {
            outputReferences: true,
            showFileHeader: false,
        },
    },
];

module.exports = config;
