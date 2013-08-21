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
		}
	});

	grunt.loadNpmTasks('grunt-sass');


	// tasks
	grunt.registerTask('default', ['sass:dev']);

	grunt.registerTask('distribution', ['sass:dist']);
};