var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer')
var uglify     = require('gulp-uglify')

gulp.task('build', function() {
  return browserify({entries: './app.js', debug: true})
    .transform("babelify", { presets: ["es2015"] })
    .bundle()
    .pipe(source('bundle.js'))
    //.pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest('../assets/js'));
});
