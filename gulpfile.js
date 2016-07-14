var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var svg2png = require('gulp-svg2png');

// Static Server + watching styl/jade files
gulp.task('serve', ['stylus'], function() {

  browserSync.init({
    proxy: 'localhost:3000/name'
  });

  gulp.watch("static/styl/**/*.styl", ['stylus']);
  gulp.watch("static/styl/**/*.styl", ['jade']);
  gulp.watch("static/svg/**/*.svg", ['svg2png']);
  
});

// Convert pug files to html
gulp.task("pug", function() {
  
  return gulp.src("./templates/jade/**/*.pug")
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
  
});

// Compile styl into CSS & auto-inject into browsers
gulp.task('stylus', function() {
  
  return gulp.src("static/styl/main.styl")
    .pipe(stylus())
    .pipe(gulp.dest("static/css"))
    .pipe(browserSync.stream());
  
});

// Convert svg files to png
gulp.task("svg2png", function() {
  
  return gulp.src("./static/svg/**/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest('./static/img'))
    .pipe(browserSync.stream());
  
});

gulp.task('default', ['serve']);