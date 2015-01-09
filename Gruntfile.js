'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/js/*.js'
      ]
    },
    sass: {
      dist: {
        files: {
          'dist/css/tavolo.min.css': [
            'src/sass/style.scss'
          ]
        },
        options: {
          style: 'compressed',
          noCache: true
        }
      }
    },
    uglify: {
      options:{
	      //beautify:true
      },
      dist: {
        files: {
          'dist/js/jquery.tavolo.min.js': [
            'src/js/tavolo.js',
          ]
        }
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register tasks
  grunt.registerTask('default', [
    'jshint',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
