module.exports = function(grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= props.license %> */\n',

    // Task configuration
    babel: {
      options: {
        sourceMap: false,
      },

      es5: {
        files: {
          "build/es5/lib/assert.js": "lib/assert.js",
          "build/es5/lib/AssertionError.js": "lib/AssertionError.js",
          "build/es5/lib/init.js": "lib/init.js",
          "build/es5/lib/Must.js": "lib/Must.js"
        }
      }
    },

    clean: {
      es5: {
        src: ["build/es5", "dist/es5"]
      }
    },

    concat: {
      options: {
        separator: "\n\n"
      },

      es5: {
        src: ["build/es5/lib/**"],
        dest: "dist/es5/<%= pkg.name %>/lib/index.js"
      }
    },
    
    copy: {
    	es5: {
    		files: [
    		  {src: ["package.json", "README.md"], dest: "dist/es5/<%= pkg.name %>/", expand: true},
    		  {src: ["test/**/*.*"], dest: "dist/es5/<%= pkg.name %>", expand: true}
    		]
    	}
    },

    jshint: {
      gruntfile: {
        src: ["Gruntfile.js"]
      },

      lib: {
        options: {
          jshintrc: true
        },

        src: ["lib/**"]
      },

      test: {
        options: {
          ignores: [
            "test/mocha.opts"
          ]
        },

        src: ["test/**"]
      }
    },

    mochaTest:{
    	options: {
    		ignoreLeaks: false,
    		quiet: false,
    		reporter: "spec",
  			timeout: 1500
    	},
    	
      es5: {
        options: {
          require: [
            "should",
            "util",
            "justo-assert"
          ]
        },

        src: [
          "test/unit/*.js"
        ]
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-mocha-test");
  
  //aliases
  grunt.registerTask("buildes5", ["clean:es5", "babel:es5", "concat:es5", "copy:es5"]);
  grunt.registerTask("es5", ["buildes5", "mochaTest:es5"]);

  // Default task
  grunt.registerTask("default", []);
};