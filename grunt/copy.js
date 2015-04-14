module.exports = {
    dev: {
        cwd: '',
        dot: true,
        expand: true,

        src: [
            '**',
            // exclude
            '!**/node_modules/**',
            '!**/app/**',
            '!Gruntfile.js',
            '!package.json',
            '!**/.git/**',
        ],
        dest: '<%= paths.localhost %>'
    }
};