module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            options: {
                fix: true,
                configFile: '.eslintrc.json'
            }
        },

        autoprefixer: {
            options: {
                browsers: ['> 1%']
            }
        },

        concat: {
            angular_1_5: {
                files: {
                    'dist/js/angular-1.5.11.concat.js': [
                        'node_modules/angular/angular.min.js',
                        'node_modules/angular-animate/angular-animate.min.js',
                        'node_modules/angular-cookies/angular-cookies.min.js',
                        'node_modules/angular-route/angular-route.min.js',
                        'node_modules/angular-sanitize/angular-sanitize.min.js'
                    ]
                }
            }
        },

        browserify: {
            options: {
                transform: [
                    ['babelify', {
                        'presets': ['es2015']
                    }],
                    'stringify'
                ]
            }
        },
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            all: {
                files: [
                    'src/**/*',
                    '!src/**/*.spec.js'
                ],
                tasks: [
                    'default'
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'eslint',
        'csscomb',
        'sasslint',
        'sass',
        'autoprefixer',
        'concat',
        'browserify'
    ]);


    require('./src/photo-gallery.grunt.js')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('gruntify-eslint');

};
