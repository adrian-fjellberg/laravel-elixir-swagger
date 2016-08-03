# Laravel Elixir Swagger v0.0.1

A Laravel Elixir extension that parses Swagger specs in JSON or YAML format, validates against the official Swagger 2.0 schema and dereferences all $ref pointers to external files.

Install
--------------------------

```js
npm install laravel-elixir-swagger
```


Usage
--------------------------

##### Basic usage

In the `gulpfile.js` add this to the requirements at the top of the file:

```js
var elixir = require('laravel-elixir');
...
require('laravel-elixir-swagger');
```

then run the extension on the Laravel Elixir `mix` object like this:

```js
elixir(function(mix) {
    mix.swagger();
});
```

This will search for a Swagger specs file named `swagger.yaml` in your applications `resources/assets/swagger/` directory, then validate it against the official Swagger 2.0 schema and dereference all $ref pointers to external files, and finnaly output it to `public/swagger.json`.

##### Define your own files and directories

To define where the extension load the Swagger specs from and where to output the compiled JSON file you can use the following example.  

```js
elixir(function(mix) {
    mix.swagger('swagger.yaml', 'swagger.json', {
        inputDest: './resources/assets/swagger/v1'
        outputDest: './public/api-docs'
    });
});
```

For more information on how this works, take a look the [parameters](#parameters).

##### Gulp watch
If you use `gulp watch` command, the extension will only look for changes to YAML files in your applications `resources/assets/swagger/` directory.

Parameters
--------------------------

The possible parameters for the `mix.swagger()` method:
```
swagger(input, output, options)
```

Parameter  | Description  |  Default value
------------- | ------------- | -------------
`input`  | The name of the Swagger spec file that should be compiled.  |  `"swagger.yaml"`
`output`  | The name of the complied JSON file that will be outputed.  |  `"swagger.json"`
`options.inputDest`  | The directory to look for your Swagger spec files.  |  `"./resources/assets/swagger/"`
`options.outputDest`  | The directory to place the compiled output file.  |  `"./public"`

See Also
--------------------------

- [Gulp][gulp]
- [Swagger][swagger]
- [Gulp Swagger][gulp-swagger]


Contributing
--------------------------
Please feel free to contribute:
- [File an issue](https://github.com/adrian-fjellberg/laravel-elixir-swagger/issues)
- [Submit a pull request](https://github.com/adrian-fjellberg/laravel-elixir-swagger/pulls)



Credit
--------------------------
This Laravel Extension is creaded using [Gerson Goulart's](https://github.com/gersongoulart) gulp plugin [gulp-swagger](https://github.com/gersongoulart/gulp-swagger).


License
--------------------------
Gulp-Swagger is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

[gulp]: http://github.com/gulpjs/gulp
[swagger]: http://swagger.io
[gulp-swagger]: https://github.com/gersongoulart/gulp-swagger
