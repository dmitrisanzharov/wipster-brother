const gulp = require('gulp');

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + "h" + today.getMinutes() + "min"
var dateTime = date+'_'+time;

gulp.task('backUpPages', done => {
    gulp.src('pages/*')
    .pipe(gulp.dest(`backUps/pages/${dateTime}`));
    done();
});

gulp.task('backUpComponents', done => {
    gulp.src('components/*')
    .pipe(gulp.dest(`backUps/components/${dateTime}`));
    done();
});

gulp.task('backUpStyles', done => {
    gulp.src('styles/*')
    .pipe(gulp.dest(`backUps/styles/${dateTime}`));
    done();
});

gulp.task('backUpModel', done => {
    gulp.src('Model/*')
    .pipe(gulp.dest(`backUps/Model/${dateTime}`));
    done();
});

gulp.task('backUpUseContext', done => {
    gulp.src('useContext.js')
    .pipe(gulp.dest(`backUps/useContext/${dateTime}`));
    done();
});

gulp.task('backUpUtils', done => {
    gulp.src('utils/*')
    .pipe(gulp.dest(`backUps/utils/${dateTime}`));
    done();
});


gulp.task('backUpNextConfig', done => {
    gulp.src('next.config.js')
    .pipe(gulp.dest(`backUps/nextConfigFile/${dateTime}`));
    done();
});

gulp.task('backUpTests', done => {
    gulp.src('*.test.js')
    .pipe(gulp.dest(`backUps/tests/${dateTime}`));
    done();
});

gulp.task('default', gulp.series('backUpPages', 'backUpComponents', 'backUpStyles', 'backUpModel', 'backUpUseContext', 'backUpUtils', 'backUpNextConfig', 'backUpTests')); 


