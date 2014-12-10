module.exports = function(grunt) {
 
  // A very basic default task.
  grunt.initConfig({
   uglify: {
      build: {
      'dest/output.min.js': ['src/input1.js', 'src/input2.js']
     }
   }
 });

  grunt.registerTask('pd', 'Log some stuff.', function() {

  grunt.log.write('Logging some stuff...').ok();
  });
};