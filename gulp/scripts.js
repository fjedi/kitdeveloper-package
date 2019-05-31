var gulp = require('gulp'),
    config = require('./config.js'),
    plugin = require('gulp-load-plugins')();

gulp.task('js:build', function (cb) {
    gulp.src(config.path.src.jsSeparate)
        .pipe(plugin.plumber())
        .pipe(gulp.dest(config.path.build.js));

    gulp.src(config.path.src.jsConcat)
        // .pipe(plugin.uglify())
        .pipe(plugin.plumber())
        .pipe(plugin.concat('theme.js'))
        .pipe(gulp.dest(config.path.build.js));
    cb();
});