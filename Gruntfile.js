module.exports = function(grunt) {

    'use strict';

    // return tasks time
    require('time-grunt')(grunt);

    // load grunt config
    require('load-grunt-config')(grunt);

    // load grunt tasks : replacement for grunt.loadNpmTasks('pluginName');
    require('load-grunt-tasks')(grunt);


    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['sass', 'autoprefixer', 'concat', 'uglify']);

    grunt.registerTask('serve', ['browserSync', 'watch']);

    // Deploy to dev excluding app source
    grunt.registerTask('dev', ['build', 'clean', 'copy']);
};