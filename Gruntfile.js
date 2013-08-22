module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					"css/main.css" : "scss/main.scss"
				}
			},
			dev: {
				files: {
					"css/main.css" : "scss/main.scss"
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass'],
				options: {
					spawn: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// tasks
	grunt.registerTask('default', ['sass:dev']);

	grunt.registerTask('distribution', ['sass:dist']);

};
