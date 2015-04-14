module.exports = {
    options: {
        mangle: false,
        preserveComments: 'all',
    },
    mainjs: {
        files: {
            '<%= paths.dist.js%>main.build.js': ['<%= paths.dist.js%>main.build.js']
        }
    }
};