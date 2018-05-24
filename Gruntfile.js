var path = require('path');
module.exports = function(grunt){

    grunt.file.setBase(__dirname);

    var pkg = grunt.file.readJSON('package.json');
    // 获取当前目录相对于共享 node_modules 目录的路径(以windows下面为例)
    var nodepath = path.relative(__dirname, pkg.nodeModulesPath);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        scriptSrc:'src/script',
        clean:{
            src:"dist"
        },
        concat:{
            options:{
                separator:';\n',
                stripBanners:true
            },
            script:{
                files:{
                    "dist/script/company.js":["<%= scriptSrc %>/company/_validate.js","<%= scriptSrc %>/company/company.js"],
                    "dist/script/product.js":["<%= scriptSrc %>/product/add.js","<%= scriptSrc %>/product/star.js"],
                }
            }

        }
    });

    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');

    // 加载任务
    grunt.task.loadTasks(path.join(nodepath,"grunt-contrib-clean",'tasks'));
    grunt.task.loadTasks(path.join(nodepath,"grunt-contrib-uglify",'tasks'));
    grunt.task.loadTasks(path.join(nodepath,"grunt-contrib-concat",'tasks'));

    grunt.registerTask('default',['clean','concat']);
}