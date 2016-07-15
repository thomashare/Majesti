// Require all node modules
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var svgo = require('gulp-svgo');
var svg2png = require('gulp-svg2png');

// Local server address
var serverAddress = 'localhost:3000'

// Build or rebuild files
gulp.task('build', function() {
  
  
  
});

// Static Server + watching styl/jade files
gulp.task('serve', function() {

  browserSync.init({
    proxy: serverAddress
  });

  gulp.watch("./static/styl/**/*.styl", ['stylus']);
  gulp.watch("./templates/**/*.pug", ['pug']);
  gulp.watch("./static/coffee/**/*.coffee", ['coffeescript']);
  gulp.watch("./static/svg/**/*.svg", ['svg2png']);
  
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
  
  return gulp.src("./static/styl/main.styl")
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest("./static/css"))
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

// Convert coffee files to js files
gulp.task("coffeescript", function() {
  
  return gulp.src("./static/coffee/**/*.coffee")
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest("./static/js"))
    .pipe(browserSync.stream());
  
});

gulp.task('default', ['stylus', 'pug', 'svg2png', 'coffeescript', 'serve']);
