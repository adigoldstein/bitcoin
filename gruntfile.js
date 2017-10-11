module.exports = function (grunt) {

  grunt.initConfig({

    sass: {
      custom: {
        files: {
          'styles/test.css': 'styles/test.scss',

        }
      }
    },

    watch: {
      styles: {
        files: ['styles/*.scss'], //watching over scss files
        tasks: ['sass:custom'], //running sass tasks
        options: {
          spawn: false
        }
      }
    }
  });


  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('build', [
    'sass:custom',
    /* 'cssmin',
     'uglify'*/
  ]);


};