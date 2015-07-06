module.exports = function(grunt) {
  "use strict";

  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration
    babel: {
      options: {
        sourceMap: false,
        comments: false,
        compact: false
      },

      nodejs: {
        options: {
          modules: "common"
        },

        files: {
          "build/es5/lib/nodejs.js": "build/es5/lib/index.js"
        }
      },

      mongo: {
        options: {
          modules: "ignore"
        },

        files: {
          "build/es5/lib/mongo.js": "build/es5/lib/index.js"
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

      preCompiler: {
        src: [
          "lib/imports.js",
          "lib/AssertionError.js",
          "lib/assert.js",
          "lib/Must.js",
          "lib/main.js"
        ],
        dest: "build/es5/lib/index.js"
      },

      postCompilerMongo: {
        options: {
          banner: "(function() {\n\n",
          footer: "\n\n})();"
        },

        src: ["../justo-inline-assert/dist/es5/mongo/justo-inline-assert.js", "build/es5/lib/mongo.js"],
        dest: "build/es5/lib/mongo.js"
      }
    },

    copy: {
      nodejs: {
        files: [
          {src: ["build/es5/lib/nodejs.js"], dest: "dist/es5/nodejs/<%= pkg.name %>/lib/index.js", expand: false},
          {src: ["package.json", "README.md"], dest: "dist/es5/nodejs/<%= pkg.name %>/", expand: true},
          {src: ["test/**/*.*"], dest: "dist/es5/nodejs/<%= pkg.name %>", expand: true}
        ]
      },

      mongo: {
        files: [
          {src: ["build/es5/lib/mongo.js"], dest: "dist/es5/mongo/<%= pkg.name %>.js", expand: false}
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
          jshintrc: true,
          ignores: []
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
            "./dist/es5/nodejs/justo-assert"
          ]
        },

        src: [
          "test/unit/lib/*.js"
        ]
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-travis-lint");

  //aliases
  grunt.registerTask("compilenodejs", ["babel:nodejs", "copy:nodejs"]);
  grunt.registerTask("compilemongo", ["babel:mongo", "concat:postCompilerMongo", "copy:mongo"]);
  grunt.registerTask("buildes5", ["travis-lint", "jshint", "clean:es5", "concat:preCompiler", "compilenodejs", "compilemongo"]);
  grunt.registerTask("test", ["mochaTest:es5"]);
  grunt.registerTask("es5", ["buildes5", "test"]);

  // Default task
  grunt.registerTask("default", []);
};
