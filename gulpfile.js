const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fs = require('fs');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;
const tiny = require('gulp-tinypng-compress');
const gutil = require('gulp-util');
const htmlminify = require("gulp-html-minify");
const gulpStylelint = require('gulp-stylelint');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const webp = require('gulp-webp');

// === FONTS from TTF to WOFF / WOFF2 ===
const fonts = () => {
    src('./src/fonts/*/**.ttf')
        .pipe(ttf2woff())
        .pipe(dest('./app/fonts/'))
    return src('./src/fonts/*/**.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./app/fonts/'))
}

// === WORK WIDTH ALL STYLES ===
const styles = () => {
    return src('./src/scss/**/*.scss')
        .pipe(gulpStylelint({
            reporters: [
                { formatter: 'string', console: true }
            ]
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 version']
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/css/'))
        .pipe(browserSync.stream());
}

// === PLUG IN LIBS ===

// === PLUG IN LIBS CSS ===
const styleLibs = () => {
    return src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/swiper/swiper-bundle.min.css',
        'node_modules/choices.js/public/assets/styles/choices.min.css',
        'node_modules/nouislider/dist/nouislider.min.css',
        'node_modules/aos/dist/aos.css'
        ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(dest('./app/css'))
}

// === PLUG IN LIBS JS ===
const scriptLibs = () => {
    return src([
        'node_modules/imask/dist/imask.min.js',
        'node_modules/nouislider/dist/nouislider.min.js',
        'node_modules/swiper/swiper-bundle.min.js',
        'node_modules/choices.js/public/assets/scripts/choices.min.js',
        'node_modules/aos/dist/aos.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify().on("error", notify.onError()))
        .pipe(dest('./app/js'))
}

const htmlInclude = () => {
    return src(['./src/*.html'])
        .pipe(fileinclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(htmlminify())
        .pipe(dest('./app'))
        .pipe(browserSync.stream());
}

// === MOVE PHOTOS TO THE APP FOLDER ===
const imgToApp = () => {
    return src('./src/images/*/**.*')
        // === IMG TO WEBP ===
        .pipe(webp())
        .pipe(dest('./app/images'))
}

// === MOVE HTML FILES TO APP FOLDER ===

const htmlFiles = () => {
    return src('./src/*.html')
        .pipe(htmlminify())
        .pipe(dest('./app'))
}

const clean = () => {
    return del(['app/*'])
}

// === MINIFY OF ALL JS FILES ===
const scripts = () => {
    return src('./src/js/main.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/js'))
        .pipe(browserSync.stream());
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    watch('./src/scss/**/*.scss', styles);
    watch('./src/**/*.html', htmlInclude);
    watch('./src/images/**/*.*', imgToApp);
    watch('./src/images/**/*.jpg', imgToApp);
    watch('./src/images/**/*.png', imgToApp);
    watch('./src/images/**/*.jpeg', imgToApp);
    watch('./src/images/**/*.svg', imgToApp);
    watch('./src/fonts/**/*.ttf', fonts);
    watch('./src/js/**/*.js', scripts);
}

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileinclude = htmlInclude;

exports.default = series(clean, parallel(htmlFiles, htmlInclude, scripts, styleLibs, scriptLibs, fonts, imgToApp), styles, watchFiles);

// === BUILD PROJECT ===

// === COMPRESION ALL IMAGES ===

const tinypng = () => {
	return src(['./src/images/*/**.jpg', './src/images/*/**.png', './src/images/*/**.svg', './src/images/*/**.jpeg', './src/images/*/**.webp'])
		.pipe(tiny({
			key: '8cXMsc4THCHgrJ6gsTgZW7fnG4kZr0q9',
			log: true,
            parallel: true,
            parallelMax: 50,
		}))
		.pipe(dest('./app/img'))
}

const stylesBuild = () => {
    return src('./src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 version']
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('./app/css/'))
}

const scriptsBuild = () => {
    return src('./src/js/main.js')
        .pipe(webpackStream({
            mode: 'development',
            output: {
                filename: 'main.js',
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }]
            },
        }))
        .on('error', function(err) {
            console.error('WEBPACK ERROR', err);
            this.emit('end');
        })
        .pipe(uglify().on("error", notify.onError()))
        .pipe(dest('./app/js'))
}

exports.build = series(clean, parallel(htmlFiles, htmlInclude, scripts, scriptsBuild, styleLibs, stylesBuild, scriptLibs, fonts, imgToApp), styles, tinypng);
