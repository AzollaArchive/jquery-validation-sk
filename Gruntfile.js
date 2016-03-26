module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: ['dist/*']
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: {
          'dist/jquery.validate.sk.js': ['src/jquery.validate.sk.js']
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/jquery.validate.sk.min.js': ['dist/jquery.validate.sk.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/jquery.validate.sk.css': 'src/jquery.validate.sk.scss'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/jquery.validate.sk.min.css': ['dist/jquery.validate.sk.css']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          src: [ 'dist/*.css', 'dist/*.js' ]
        }
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-banner');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'jshint', 'usebanner']);

};
