var options = function () {
    var targetObj = grunt.config([name, target]);
    var args = [{}].concat(grunt.util.toArray(arguments)).concat([
        grunt.config([name, 'options']),
        grunt.util.kindOf(targetObj) === 'object' ? targetObj.options : {}
    ]);
    var options = grunt.util._.extend.apply(null, args);
    grunt.verbose.writeflags(options, 'Options');
    return options;
};
