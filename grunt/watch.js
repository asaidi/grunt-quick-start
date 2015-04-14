module.exports = {
    options: {
        spawn: false,
        interrupt: true,
        debounceDelay: 250,
        livereload: true,
    },
    css: {
        files: '<%= paths.app.css%>**/**/*.{scss,sass}',
        tasks: ['sass', 'autoprefixer'],
    },
    js: {
        files: ['<%= paths.app.js%>plugins/**/*.js', '<%= paths.app.js%>main.js'],
        tasks: ['concat', 'uglify'],
    },
};