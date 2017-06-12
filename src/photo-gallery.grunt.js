module.exports = function(grunt) {
    grunt.config.merge({
        eslint: {
            photoGallery: {
                src: ['src/**/*.js']
            }
        },
        csscomb: {
            photoGallery: {
                expand: true,
                cwd: 'src/',
                src: ['**/*.scss'],
                dest: 'src/'
            }
        },
        sasslint: {
            photoGallery: ['src/**/**.scss']
        },
        sass: {
            photoGallery: {
                files: {
                    'dist/css/photo-gallery.css': 'src/photo-gallery.scss'
                }
            }
        },
        browserify: {
            photoGallery: {
                files: {
                    'dist/js/photo-gallery.js': ['src/index.js']
                }
            }
        },
        autoprefixer: {
            photoGallery: {
                files: {
                    'dist/css/photo-gallery.css': 'dist/css/photo-gallery.css'
                }
            }
        },
        watch: {
            photoGallery: {
                files: [
                    'src/**/*',
                    '!src/**/*.spec.js'
                ],
                tasks: [
                    'photoGallery'
                ]
            }
        }
    });
    grunt.registerTask('photoGallery', [
        'eslint:photoGallery',
        'csscomb:photoGallery',
        'sasslint:photoGallery',
        'sass:photoGallery',
        'autoprefixer:photoGallery',
        'browserify:photoGallery'
    ]);
};
