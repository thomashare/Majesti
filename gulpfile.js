var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var svgo = require('gulp-svgo');
var svg2png = require('gulp-svg2png');

// Static Server + watching styl/jade files
gulp.task('serve', ['stylus'], function() {

  browserSync.init({
    proxy: '/Users/tommy/webapps/Majesti/index.html'
  });

  gulp.watch("static/styl/**/*.styl", ['stylus']);
  gulp.watch("static/styl/**/*.styl", ['pug']);
  gulp.watch("static/svg/**/*.svg", ['svg2png']);
  
});

// Convert pug files to html
gulp.task("pug", function() {
  
  return gulp.src("./templates/jade/*/*.pug")
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
  
});

// Compile styl into CSS
gulp.task('stylus', function() {
  
  return gulp.src("static/styl/main.styl")
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest("static/css"))
    .pipe(browserSync.stream());
  
});

// Optimize svg files and convert them to png
gulp.task("svg2png", function() {
  
  return gulp.src("./static/svg/**/*.svg")
    .pipe(svgo())
    .pipe(svg2png())
    .pipe(gulp.dest('./static/img'))
    .pipe(browserSync.stream());
  
});

gulp.task('default', ['serve']);
