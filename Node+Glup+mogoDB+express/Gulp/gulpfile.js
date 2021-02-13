//引用gulp模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
//建立任务
gulp.task('first', () => {
    console.log('我们的第一个Gulp任务执行了');
    // 1.获取要处理的文件
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css'));

});

//html任务
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        //获取公共代码
        .pipe(fileinclude())
        .pipe(htmlmin({
            //压缩代码
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
})

//css任务
// 1less语法转换
// 2css代码压缩
gulp.task('cssmin', () => {
    //选择cs目录下的所有less和css文件
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        // 转为css语法
        .pipe(less())
        //将css代码压缩
        .pipe(csso())
        //输出结果
        .pipe(gulp.dest('dist/css'))
})

//js任务
// es6代码转换
// 代码压缩
gulp.task('jsmin2', () => {
    gulp.src('./src/js/*.js')
        //它可以判断当前代码的运行环境，将代码转化为当前运行环境所支持的代码
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//拷贝文件夹
gulp.task('copy', () => {
    gulp.src('./src/img/*')
        .pipe(gulp.dest('dist/img'))
    gulp.src('./src/upload/*')
        .pipe(gulp.dest('dist/upload'))
})





//构建任务
gulp.task('default', ['htmlmin', 'cssmin', 'jsmin2', 'copy']);