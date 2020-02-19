const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const rename = require('gulp-rename');
const path = require('path');
const less = require('gulp-less');
const cleanCss = require('gulp-clean-css');
const imgmin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('default', function () {// ['uglifyjs', 'less', 'images', 'html'],
  gulp.watch('assets/styles/*.less', ['less']);
  gulp.watch("*.html").on("change", browserSync.reload);
  browserSync.init({ server: { baseDir: './' } });
});
//压缩JS
gulp.task('uglifyjs', () => {
  return pipeline(
    gulp.src('src/**.js'),
    uglify(),
    rename(function (path) {
      // path.basename += ".min"  方式一
      path.extname = '.min.js';
    }),
    gulp.dest('dist/js')
  );
});
//  压缩LESS
gulp.task('less', () => {
  return pipeline(
    gulp.src('assets/styles/**.less'),
    less({ paths: [path.join(__dirname, 'less', 'includes')] }),
    cleanCss(),
    rename(path => {
      path.extname = '.min.css';
    }),
    gulp.dest('dist/css'),
    reload({stream:true})
  );
});
//压缩图片
gulp.task('images', () => {
  return pipeline(
    gulp.src('assets/images/*'),
    imgmin(),
    rename(path => {
      path.basename += '.min';
    }),
    gulp.dest('dist/images')
  );
});
//压缩html
gulp.task('html', () => {
  return pipeline(
    gulp.src('*.html'),
    htmlmin({ collapseWhitespace: true }),
    gulp.dest('dist/')
  )
})
/* gulp.task('default', function () {
    return gulp.src('src/**.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            // path.basename += ".min"  方式一
            path.extname = '.min.js'
        }))
        .pipe(gulp.dest('dist'));
});*/

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask
