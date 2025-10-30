module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          'main.css': 'main.less'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'main.min.js': 'main.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};
