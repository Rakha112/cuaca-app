// Initialize modules
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

// Use dart-sass for @use
//sass.compiler = require('dart-sass');

// Sass Task
function scssTaskComponents() {
  return src("src/scss/components/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("src/css/components", { sourcemaps: "." }));
}
function scssTaskPages() {
  return src("src/scss/pages/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("src/css/pages", { sourcemaps: "." }));
}

// Watch Task
function watchTask() {
  watch(["src/scss/**/*.scss"], series(scssTaskComponents, scssTaskPages));
}

// Default Gulp Task
exports.default = series(scssTaskComponents, scssTaskPages, watchTask);

// Build Gulp Task
exports.build = series(scssTaskComponents, scssTaskPages);
