var gulp = require('gulp')
var del = require('del')

require('./build/client.js')
require('./build/admin.js')
require('./build/server.js')


gulp.task('clean', function(cb) { del(['dist/'], cb) })

gulp.task('build', ['clean'], function() {
  gulp.start(['client', 'admin'])
})

gulp.task('dev', ['build', 'debug', 'inspector'])
gulp.task('default', ['build', 'server'])

