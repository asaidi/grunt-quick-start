module.exports = {
    options: {
        separator: ';',
    },
    dist: {
        src: [
            '<%= paths.app.pluginsJs%>**/*.js',
            '<%= paths.app.js%>**/**/.js',
            '<%= paths.app.js%>main.js',
        ],
        dest: '<%= paths.dist.js%>main.build.js',
    },
};