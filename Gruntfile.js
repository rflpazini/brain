module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                src: ['sass/brain.scss'],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        jshint: {
            all: ['js/**/*.js', 'dist/js/out.js']
        },
        concat: {
        	dist: {
        		src: ['js/brain.js', 'js/utils.js', 'node_modules/director/build/director.js'],
        		dest: 'dist/js/out.js'
        	}
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dev', ['sass', 'jshint']);
    grunt.registerTask('dist', ['sass', 'cssmin', 'jshint']);
}
