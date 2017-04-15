var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    debug = require('gulp-debug'),
    //changed = require('gulp-changed'),
    //ngAnnotate = require('gulp-ng-annotate'),
    //tap = require('gulp-tap'),
    //filelog = require('gulp-filelog'),
    //filenames = require("gulp-filenames"),
    notifier = require('node-notifier');
    sftp = require('gulp-sftp');

// sftp
function $sftpOpts(path) {
  return {
    host: 'wp-abhijeetdeb.rhcloud.com',
    user: '58e7793f7628e18570000053',
    remotePath: '/var/lib/openshift/58e7793f7628e18570000053/app-root/data/current/' + (path || '')
    //pass: '~/.ssh/id_rsa'
  }
}

gulp.task('sftpNotify', function() {
  notifier.notify({
    'icon': 'assets/icons/upload.png',
    'title': 'Success',
    'message': 'Edited file uploaded'
  });
});

// pug
var $pugSource = 'source/pug/*.pug',
    $pugDestination = './',
    $pugOptions = { 
      pretty: true 
    };

gulp.task('pugCompile', function() {
  //$pugFile = 'hello';
  return gulp.src($pugSource) // tell gulp our source folder
    .pipe(debug({title: 'unicorn:'}))
    .pipe(pug($pugOptions)) // pipe to pug plugin
    .pipe(gulp.dest($pugDestination)) // tell gulp our output folder
    //.pipe(sftp($sftpOpts('test'))); // upload via sftp
});



gulp.task('pugNotify', function() {
  notifier.notify({
    icon: 'assets/icons/pug.png',
    title: 'Success',
    message: 'Pug file compiled'
  });
});

gulp.task('pug', ['pugCompile', 'pugNotify', 'sftpNotify'], function() {
  //console.log($pugFile);
});


// sass
var $sassSource = 'source/sass/*.sass',
    $sassDestination = 'assets/css/',
    $sassOptions = { 
      outputStyle: 'compressed'
    },  
    autoprefixerOptions = {
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    };

gulp.task('sassCompile', function () {
  return gulp.src($sassSource) // tell gulp our source folder
    .pipe(sass($sassOptions).on('error', sass.logError)) // pipe to sass plugin
    .pipe(autoprefixer(autoprefixerOptions)) // add autoprefixes
    .pipe(gulp.dest($sassDestination)) // tell gulp our output folder
    .pipe(sftp($sftpOpts('test'))); // upload via sftp
});

gulp.task('sassNotify', function() {
  notifier.notify({
    'icon': 'assets/icons/sass.png',
    'title': 'Success',
    'message': 'Sass file compiled',
  });
});

gulp.task('sass', ['sassCompile', 'sassNotify', 'sftpNotify']);

// watch files
gulp.task('watchPug', function() {
  return gulp.watch($pugSource, ['pug']);
});

gulp.task('watchSass', function() {
  return gulp.watch($sassSource, ['sass']);
});

// run gulp
gulp.task('default', ['watchPug', 'watchSass']);
