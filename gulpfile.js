var gulp = require('gulp'),

    plugins  = require('gulp-load-plugins'),
    gulpRequireTasks = require('gulp-require-tasks');


    plugins();
    
    gulpRequireTasks({

  path: process.cwd() + '/gulp/tasks' // This is default! 
  
});
 
