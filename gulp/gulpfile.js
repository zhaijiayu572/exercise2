
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
gulp.task('task1',function () {
    gulp.src('index.html').pipe(gulp.dest('dest')).pipe(connect.reload());
});
gulp.task('copy-img',function () {
    gulp.src('img/*.png').pipe(gulp.dest('dest/img'));
});
gulp.task('sass',function () {
    gulp.src('*.scss').pipe(sass()).pipe(gulp.dest('dest/css'));
});
gulp.task('connect',function () {
    connect.server({
        root:'dest',
        port:'8888',
        reload:true
    })
});
gulp.task('watch',function () {
    gulp.watch('index.html',['task1']);
});
gulp.task('a',['watch','connect']);