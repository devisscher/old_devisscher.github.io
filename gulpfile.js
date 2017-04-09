var gulp = require('gulp');
var uncss = require('gulp-uncss');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
gulp.task('default', function () {
    return gulp.src('css/main.scss')
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(uncss({
            html: ['https://tdevisscher.ca',
                    'https://tdevisscher.ca/blog',
                    'https://tdevisscher.ca/about',
                    'https://tdevisscher.ca/resume']
        }))
        .pipe(nano())
        .pipe(gulp.dest('./_site/css'));
});

