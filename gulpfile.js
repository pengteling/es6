const gulp = require('gulp');
//const babel = require('gulp-babel');
const plumber = require('gulp-plumber'); //防止gulp退出进程
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require("babelify");

// gulp.task('es6to5', () => {
//     return gulp.src('src/js/index.js')
//         .pipe(plumber())
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('wathjs', function() {
//     gulp.watch('src/js/index.js', ['es6to5'])
// });
gulp.task('wathjs', function() {
    gulp.watch('src/**/*.js', ['browserify'])
});
// browserify
gulp.task("browserify", function () {
    var b = browserify({
        entries: "src/js/index.js"
    });

    return b
        
        .transform(babelify, { 'presets': ['es2015','stage-3'] , 'plugins': ['transform-runtime','transform-decorators-legacy'] })
        .bundle()
        .pipe(plumber()) 
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist/js"));
});

//'wathjs2','wathjs',
gulp.task('default', ['browserify','wathjs','browser-sync']);


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