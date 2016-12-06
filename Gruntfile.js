module.exports = function(grunt){
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options:{
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'public/sass/pages',
                    src: ['learning-center.scss'],
                    dest: 'public/css/pages',
                    ext: '.css'
                }]
            }
        },
        htmlclean: {
            deploy: {
                expand: true,
                cwd: 'public/theme/un-min',
                src: '**/*.php',
                dest: 'wp-content/themes/strappress-child'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/js/main.min.js': ['public/js/inc/*.js','public/js/inc/pages/home-iframe.js','public/js/general.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: true,
            },
            target: {
                files: {
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['public/sass/pages/*.scss'],
                tasks: ['sass','htmlclean','uglify','cssmin'],
            },
            htmlclean: {
                files: ['public/theme/un-min/*.php'],
                tasks: ['htmlclean'],
                options: {

                }
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-htmlclean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Do the Task
    grunt.registerInitTask('default', ['sass','htmlclean','uglify','cssmin','watch']);
}
