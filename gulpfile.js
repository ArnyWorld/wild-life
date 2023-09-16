const { src, dest, watch, series, parallel } = require('gulp');
//CSS y SASS
const sass = require("gulp-sass")(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
//Imágenes
const imagemin = require('gulp-imagemin');
const webp = require("gulp-webp");
const avif = require("gulp-avif");

//Javascript
const terser = require("gulp-terser-js");

function css(done){
    //Compilar SASS
    //1.- Identificar archivo
    //2.- Compilarla
    //3.- Guardar el css
    src('src/scss/app.scss')
    .pipe(sourcemaps.init())
    //  .pipe(sass({outputStyle:'compressed'}))  se compilara y comprimira al mismo tiempo
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'))
    done();
}

function javascript(done){
    src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/js"))
    done();
}

function dev(){
    //Que cambios va realizar y que función va llamar cuando existan cambios en el pimer parámetro
    watch('src/scss/**/*.scss', css)
    watch('src/img/**/*', imagenes)
    watch("src/js/**/*.js", javascript)
    //watch('src/scss/app.scss', css);
}

function imagenes(){
    return src('src/image/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/image'))  
}

function versionWebp(){
    const opciones = {
        quality:50
    }
    return src('src/image/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/image'))
}

function versionAvif(){
    const opciones = {
        quality:50
    }
    return src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones))
    .pipe(dest('build/image'))
}

exports.css = css;
exports.javascript = javascript;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif; 
exports.default = series(imagenes, versionWebp, versionAvif, css, javascript, dev);

//series  -> Se inicia una tarea y hasta que finaliza, inicia la siguiente
//exports.default = series(css, dev);

//parallel  ->  Todas inician al mismo tiempo
//exports.default = parallel (css, dev);
