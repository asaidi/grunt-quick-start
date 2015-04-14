module.exports = {
    dynamic: {
        options: {
            optimizationLevel: 3,
        },
        files: [{
            expand: true,
            cwd: '<%= paths.app.images%>',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: '<%= paths.dist.images%>/'
        }]
    }
};