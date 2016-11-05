'use strict';

var config = require('../config');
   console.log(config.paths.sass+'/**/*.scss');
   console.log(process.cwd()+ config.paths.sass+'/**/*.scss');


module.exports = function (gulp,plugins){
     console.log(plugins.sass);
    gulp.task('sass',function(){
        
        gulp.src(process.cwd()+ config.paths.sass+'/**/*.scss')
        .pipe(plugins.sass().on('error',sass.logError))
        .pipe(gulp.dest('build/css'));
    })
};