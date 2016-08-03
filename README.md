# Laravel Elixir Swagger v0.0.1
--------------------------

A Laravel Elixir extension that parses Swagger specs in JSON or YAML format, validates against the official Swagger 2.0 schema and dereferences all $ref pointers to external files.

Install
--------------------------

```js
npm install laravel-elixir-swagger
```


Usage
--------------------------

Output fully parsed schema:

```js
var gulp = require('gulp');
var swagger = require('gulp-swagger');

gulp.task('schema', function() {
  gulp.src('./src/api/index.yaml')
    .pipe(swagger('schema.json'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['schema']);
```

See Also
--------------------------

- [Gulp][gulp]
- [Swagger][swagger]
- [Gulp Swagger][gulp-swagger]


Contributing
--------------------------
Please feel free to contribute:
[File an issue](https://github.com/gersongoulart/gulp-swagger/issues) 
[Submit a pull request](https://github.com/gersongoulart/gulp-swagger/pulls)



Credit
--------------------------
This Laravel Extension is creaded using [Gerson Goulart's](https://github.com/gersongoulart) gulp plugin [gulp-swagger](https://github.com/gersongoulart/gulp-swagger).


License
--------------------------
Gulp-Swagger is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

[gulp]: http://github.com/gulpjs/gulp
[swagger]: http://swagger.io
[gulp-swagger]: https://github.com/gersongoulart/gulp-swagger
