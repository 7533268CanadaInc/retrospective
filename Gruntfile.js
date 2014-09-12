
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      build: {
        files: {
          'stylesheets/main.css': 'stylus/app.styl'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'stylesheets/main.min.css': 'stylesheets/main.css'
        }
      }
    },

    react: {
      files: {
        expand: true,
        cwd: 'javascripts/react/src/',
        src: ['**/*.jsx'],
        dest: 'javascripts/react/build',
        ext: '.js'
      }
    },

    uglify: {
      jsx: {
        files: {'javascripts/react/react-files-min.js':
          [
            'javascripts/react/build/*.js'
          ]
        },
        options: {
          mangle: false,
          preserveComments: false
        }
      }
    },

    watch: {
      stylesheets: {
        files: ['stylesheets/main.css', 'stylus/**/*.styl'],
        tasks: ['stylus', 'cssmin']
      },
      react: {
        files: 'javascripts/react/src/**/*.jsx',
        tasks: 'react'
      }
    }

  });

  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin', 'stylus', 'react', 'uglify']);
  grunt.registerTask('production', ['uglify']);
};
