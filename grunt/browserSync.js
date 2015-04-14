module.exports = {
    default_options: {
        bsFiles: {
            src: [
                "<%= paths.app.css %>**/*.css",
                "*.php"
            ]
        },
        options: {
            watchTask: true,
            proxy: "<%= paths.localhost %>",
        }
    }
};