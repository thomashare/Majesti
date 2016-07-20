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
var rename = require('gulp-rename');
var fs = require('fs');

// Static Server + watching styl/jade files
gulp.task("serve", function() {

  browserSync.init({
    
    server: { 
      baseDir: "./",
      index: "index.html"
    },
    
    port: 3000
    
  });

  gulp.watch("./static/styl/**/*.styl", ['stylus']);
  gulp.watch("./templates/**/*.pug", ['pug', 'index-to-root']);
  gulp.watch("./index.html", ['pug']);
  gulp.watch("./static/coffee/**/*.coffee", ['coffeescript']);
  gulp.watch("./static/svg/**/*.svg", ['svgo']);
  
});

// Convert pug files to html and move to the pages folder in the root directory
gulp.task("pug", function buildHTML() {
  
  return gulp.src(['./templates/pages/!(global)/*.pug', './templates/pages/!(no-content).pug'])
    .pipe(pug())
    .pipe(gulp.dest("./pages"))
    .pipe(browserSync.stream());
  
});

// Find the index or home pages index file and copy it to the root directory as 'index.html' after pug task is finished
gulp.task("index-to-root", ["pug"], function() {
          
  return gulp.src("./pages/{home,index}/index.html")
    .pipe(rename("index.html"))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
  
});

// Compile styl into CSS
gulp.task("stylus", function() {
  
  return gulp.src("./static/styl/main.styl")
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest("./static/css"))
    .pipe(browserSync.stream());

});

// Optimize svg files
gulp.task("svgo", function() {
  
  return gulp.src("./static/svg/**/*.svg")
    .pipe(svgo())
    .pipe(gulp.dest('./static/svg'))
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

gulp.task('default', ['stylus', 'pug', 'index-to-root', 'svgo', 'coffeescript', 'serve']);