//
// GRUNT TASK: Watch
// Watch for changes in styles and javascript and compile them on-the-fly
// -----------------

module.exports = {
  options: {
    livereload: true
  },
  styles: {
    files: ['src/stylesheets/**/*.scss'],
    tasks: ['sass', 'copy:css']
  },
  js: {
    files: 'src/javascripts/**/*.js',
    tasks: ['neuter']
  },
  docs: {
    files: 'src/docs/**/*',
    tasks: ['jekyll']
  }
};
