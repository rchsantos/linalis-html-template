// Initialization sequence
var gulp       = require('gulp'),
	sass       = require('gulp-sass'), // Conversion des SCSS en CSS
	sourcemaps = require('gulp-sourcemaps'),
	cssnano    = require('gulp-cssnano'),
	rename     = require('gulp-rename'), // Renomage des fichers
	uglify     = require('gulp-uglify'), // Minification des JS
	watch      = require('gulp-watch'), // Sourveille les changements
	notify 	   = require("gulp-notify"),
	del        = require('del'),
	concat 	   = require('gulp-concat'),
	plumber    = require('gulp-plumber');
	livereload = require('gulp-livereload');

// Project configuration

// SCSS Task
gulp.task('sass', function(){
	return gulp.src(['sass/styles.sass']) // Chemin pour recuperer les fichiers SASS
		.pipe(sass({
			unixNewlines  : true,
			compass       : true,
			noCache       : true
		})
			.on("error", notify.onError({
				message: "Error: <%= error.message %> @ <%= options.date %>",
				title: "Error running something"
			})))    // ici on utilise gulp-sass
		.pipe(sourcemaps.init())
		.pipe(cssnano()) // minifications des fichers
		.pipe(sourcemaps.write('.'))
		.pipe(rename({suffix: '.min'})) // changement de noms de fichers
		.pipe(gulp.dest('css')) // destination des fichiers compiles
		.pipe(livereload())
		.pipe(notify({
			message: "Generated file: <%= file.relative %> @ <%= options.date %>",
			templateOptions: {
				date: new Date()
			}
		}));
});

// JAVASCRIPT Task
/*
gulp.task('js', function(){
	return gulp.src(['bower_components/foundation/js/main.js', 'bower_components/foundation/js/pages.js '])
		.on("error", console.log)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('js'))
		.pipe(livereload())
		.pipe( notify( { message: '<%= file.relative %> JS Compile complete.' } ) );
});*/

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('sass/**/*.sass', ['sass']);
	//gulp.watch('bower_components/foundation/js/**/*.js', ['js']);
	// autres observations
})
