var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var swagger = require('gulp-swagger');
var Task = Elixir.Task;

Elixir.extend('swagger', function(input, output, options) {

    // Set defaults
    input = input || 'swagger.yaml';
    output = output || 'swagger.json';
    options = options || {};
    options.inputDest = options.inputDest || './resources/assets/swagger/';
    options.outputDest = options.outputDest || './public';

    // Set input for gulp-swagger
    input = options.inputDest + input;

    // Gulp task
    new Task('swagger', function() {
        return gulp.src(input)
            .pipe(swagger(output, {
                resolveInternal: false
            }))
            .pipe(gulp.dest(options.outputDest));
    })
        .watch(options.inputDest + '**');

});