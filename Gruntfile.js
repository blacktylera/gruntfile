'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    clean: ['public'],
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**', '!**/*.jade', '!**/*.{scss,sass'], dest: 'public/', filter: 'isFile'}]
      }
    },
    jade: {
      compile:{
        files: [{expand:true, cwd: 'app/',src: ['**/*.jade', '!**/_*.jade'], dest: 'public/', ext: '.html'}]
      }
    },
    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
              'public/css/main.css': 'app/css/main.scss'
          }
      }
  },
     watch: {
      other: {
        files: ['app/**', '!app/**/*.jade', '!app/**/*.{sass,scss}'],
        tasks: ['copy']
      },
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['app/**/*.{sass,scss}'],
        tasks: ['sass']
      }
    }
});

  grunt.registerTask('default', ['']);
  grunt.registerTask('build', ['clean','copy', 'jade', 'sass']);
  grunt.registerTask('watch', ['build']);
};