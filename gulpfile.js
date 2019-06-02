/// <binding BeforeBuild='less, default' />
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    merge = require('merge-stream'),
    del = require('del'),
    bundleconfig = require('./bundleconfig.json'),
    less = require('gulp-less'),
    rename = require("gulp-rename");

const regex = {
    css: /\.css$/,
    html: /\.(html|htm)$/,
    js: /\.js$/
};

const nodeRoot = './node_modules';

const targetPath = './wwwroot/lib';
const targetPathCss = './wwwroot/css';

gulp.task('cleanContent', () => del([`${targetPath}/**/*`]));

gulp.task('less', () => gulp.src('Styles/*.less').pipe(less()).pipe(gulp.dest('wwwroot/css/')));

gulp.task('generateContent', async () => {
    gulp.src(`${nodeRoot}/bootstrap/dist/js/*`).pipe(gulp.dest(`${targetPath}/bootstrap/dist/js`));
    gulp.src(`${nodeRoot}/bootstrap/dist/css/*`).pipe(gulp.dest(`${targetPath}/bootstrap/dist/css`));

    gulp.src(`${nodeRoot}/jquery/dist/jquery.js`).pipe(gulp.dest(`${targetPath}/jquery/dist`));
    gulp.src(`${nodeRoot}/jquery/dist/jquery.min.js`).pipe(gulp.dest(`${targetPath}/jquery/dist`));

    gulp.src(`${nodeRoot}/jquery-validation/dist/*.js`).pipe(gulp.dest(`${targetPath}/jquery-validation/dist`));

    gulp.src(`${nodeRoot}/jquery-validation-unobtrusive/dist/*.js`).pipe(gulp.dest(`${targetPath}/jquery-validation-unobtrusive`));
    gulp.src(`${nodeRoot}/jquery-ajax-unobtrusive/dist/*.js`).pipe(gulp.dest(`${targetPath}/jquery-validation-unobtrusive`));

    gulp.src(`${nodeRoot}/lodash/lodash.js`).pipe(gulp.dest(`${targetPath}/lodash`));
    gulp.src(`${nodeRoot}/lodash/lodash.min.js`).pipe(gulp.dest(`${targetPath}/lodash`));

    gulp.src(`${nodeRoot}/popper.js/dist/umd/popper.js`).pipe(gulp.dest(`${targetPath}/popper`));

    gulp.src(`${nodeRoot}/tooltip.js/dist/umd/tooltip.js`).pipe(gulp.dest(`${targetPath}/tooltip`));

    gulp.src(`${nodeRoot}/toastr/toastr.js`).pipe(gulp.dest(`${targetPath}/toastr`));
    gulp.src(`${nodeRoot}/toastr/build/toastr.min.js`).pipe(gulp.dest(`${targetPath}/toastr`));
    gulp.src(`${nodeRoot}/toastr/build/toastr.css`).pipe(gulp.dest(`${targetPath}/toastr`));

    gulp.src(`${nodeRoot}/bootbox/dist/*`).pipe(gulp.dest(`${targetPath}/bootbox`));

    gulp.src(`${nodeRoot}/@fortawesome/fontawesome-free/css/all.css`).pipe(gulp.dest(`${targetPath}/fontawesome/css`));
    gulp.src(`${nodeRoot}/@fortawesome/fontawesome-free/css/all.min.css`).pipe(gulp.dest(`${targetPath}/fontawesome/css`));
    gulp.src(`${nodeRoot}/@fortawesome/fontawesome-free/js/all.js`).pipe(gulp.dest(`${targetPath}/fontawesome/js`));
    gulp.src(`${nodeRoot}/@fortawesome/fontawesome-free/js/all.min.js`).pipe(gulp.dest(`${targetPath}/fontawesome/js`));
    gulp.src(`${nodeRoot}/@fortawesome/fontawesome-free/webfonts/*`).pipe(gulp.dest(`${targetPath}/fontawesome/webfonts`));

    gulp.src(`${nodeRoot}/requirejs/require.js`).pipe(gulp.dest(`${targetPath}/requirejs`));

    gulp.src(`${nodeRoot}/moment/min/*`).pipe(gulp.dest(`${targetPath}/moment`));

    gulp.src(`${nodeRoot}/animate.css/animate.css`).pipe(gulp.dest(`${targetPath}/animate.css`));

    gulp.src(`${nodeRoot}/@mdi/font/css/materialdesignicons.css`).pipe(gulp.dest(`${targetPath}/materialdesignicons`));
    gulp.src(`${nodeRoot}/@mdi/font/fonts/*`).pipe(gulp.dest(`${targetPath}/fonts`));

    gulp.src(`${nodeRoot}/datatables.net-bs4/css/dataTables.bootstrap4.css`).pipe(gulp.dest(`${targetPath}/datatables.net-bs4/css`));
    gulp.src(`${nodeRoot}/datatables.net-bs4/js/dataTables.bootstrap4.js`).pipe(gulp.dest(`${targetPath}/datatables.net-bs4/js`));

    gulp.src(`${nodeRoot}/datatables.net/js/jquery.dataTables.js`).pipe(gulp.dest(`${targetPath}/datatables.net/js`));

    gulp.src(`${nodeRoot}/chart.js/dist/Chart.js`).pipe(gulp.dest(`${targetPath}/chart.js/`));
    gulp.src(`${nodeRoot}/chart.js/dist/Chart.css`).pipe(gulp.dest(`${targetPath}/chart.js/`));

    gulp.src(`${nodeRoot}/perfect-scrollbar/dist/perfect-scrollbar.js`).pipe(gulp.dest(`${targetPath}/perfect-scrollbar`));
});

gulp.task('min:js', async function () {
    merge(getBundles(regex.js).map(bundle => {
        return gulp.src(bundle.inputFiles, { base: '.' })
            .pipe(concat(bundle.outputFileName))
            .pipe(uglify())
            .pipe(gulp.dest('.'));
    }))
});

gulp.task('min:css', async function () {
    merge(getBundles(regex.css).map(bundle => {
        return gulp.src(bundle.inputFiles, { base: '.' })
            .pipe(concat(bundle.outputFileName))
            .pipe(cssmin())
            .pipe(gulp.dest('.'));
    }))
});

gulp.task('min:html', async function () {
    merge(getBundles(regex.html).map(bundle => {
        return gulp.src(bundle.inputFiles, { base: '.' })
            .pipe(concat(bundle.outputFileName))
            .pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
            .pipe(gulp.dest('.'));
    }))
});

gulp.task('min', gulp.series(['min:js', 'min:css', 'min:html']));

gulp.task('clean', () => {
    return del(bundleconfig.map(bundle => bundle.outputFileName));
});

gulp.task('watch', () => {
    getBundles(regex.js).forEach(
        bundle => gulp.watch(bundle.inputFiles, gulp.series(["min:js"])));

    getBundles(regex.css).forEach(
        bundle => gulp.watch(bundle.inputFiles, gulp.series(["min:css"])));

    getBundles(regex.html).forEach(
        bundle => gulp.watch(bundle.inputFiles, gulp.series(['min:html'])));
});

const getBundles = (regexPattern) => {
    return bundleconfig.filter(bundle => {
        return regexPattern.test(bundle.outputFileName);
    });
};

gulp.task('default', gulp.series("min"));