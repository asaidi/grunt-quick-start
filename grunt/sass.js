module.exports = {
    options: {
        sourceMap: true,
        outputStyle: 'compressed',
        includePaths: [
            "<%= paths.app.css%>base",
            "<%= paths.app.css%>components",
            "<%= paths.app.css%>layout",
            "<%= paths.app.css%>plugins",
        ]
    },
    dist: {
        files: {
            '<%= paths.dist.css%>app.min.css': '<%= paths.app.css %>app.scss'
        }
    }
};