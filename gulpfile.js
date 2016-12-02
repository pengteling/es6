const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es6to5', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('wathjs', function() {
    gulp.watch('src/**/*.js', ['es6to5'])
});
gulp.task('default', ['browser-sync', 'wathjs']);


/*实时监测 浏览器实时变化*/
var browserSync = require('browser-sync');
gulp.task('browser-sync', function() {
    var files = [
        '**/*.html',
        'dist/css/**/*.css',
        'dist/js/**/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './dist/'
        }
    });
});