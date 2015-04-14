module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 9']
    },
    dist: {
        files: {
            '<%= paths.dist.css%>app.min.css': '<%= paths.dist.css%>app.min.css'
        }
    }
};