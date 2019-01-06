var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    postcss      = require('gulp-postcss'),
    //autopre.. runs under postcss 
    autoprefixer = require('autoprefixer'),
    cssVars      = require('postcss-simple-vars'),
    nested       = require('postcss-nested');


// gulp contain method called 'task". pass 2 arguments - a task name , what we want to happen when it runs
gulp.task('default', function(){
    console.log('Hooray !');
});

//html task
gulp.task('html', function(){
    console.log('Imagin something useful being done to your HTML here');
});

//Styles task
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssVars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles')); 
});

// watch task
gulp.task('watch', function(){
    //specify the file we want to watch
    //'./' is a root file
    // with gulp 4, this wouldn't work
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    
    watch('./app/assets/styles/**/**.css', function(){
        gulp.start('styles');
    })
});


