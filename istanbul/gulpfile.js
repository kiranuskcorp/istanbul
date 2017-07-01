// project - test AngularJs, gulpfile
var gulp = require('gulp');
var karma = require('gulp-karma');
var allFiles = [
 'app/scripts/angular/angular.js',
 'app/scripts/angular-mocks/angular-mocks.js',
 'app/js/*.js',
 'test/*.js'
];
gulp.task('test', function(coverage) {
  gulp.src(allFiles)
  .pipe(karma({
  configFile: 'karma.conf.js',
  action: 'run'
}))
.on('error', function(err) {
 // Make sure failed tests cause gulp to exit non-zero
   throw err;
 });
});
