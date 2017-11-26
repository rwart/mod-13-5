module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['js/*.js', 'Gruntfile.js'],
    },
    watch: {
      scripts: {
          files: ['*.js', 'js/*.js', 'Gruntfile.js'],
          tasks: ['jshint'],
          options: {
              spawn: false,
            },
        },
    },

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // task for browserSync, jshint  on the run
  grunt.registerTask('wait', ['watch']);

  // "npm test" runs these task(s)
  grunt.registerTask('test', ['jshint']);

  // Default task(s).
  grunt.registerTask('default', ['test']);
};
