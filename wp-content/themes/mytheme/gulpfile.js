/**
 *
 *  ██████╗ ██╗   ██╗██╗     ██████╗
 * ██╔════╝ ██║   ██║██║     ██╔══██╗
 * ██║  ███╗██║   ██║██║     ██████╔╝
 * ██║   ██║██║   ██║██║     ██╔═══╝
 * ╚██████╔╝╚██████╔╝███████╗██║
 *  ╚═════╝  ╚═════╝ ╚══════╝╚═╝
 *
 *
 * The tasks of this gulp file:
 * * Watches scripts, styles, PHP and HMTL documents
 * * Reloads the page on changes
 * * Compiles SCSS into CSS
 * * Adds prefixes to CSS
 * * Minifies scripts and styles
 * * Relocates scripts and styles
 * * Concatenate and renames scripts
 * * Creates a live server
*/

const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const purify = require('gulp-purifycss');
const browserSync = require('browser-sync').create();
const { config } = require('./gulp-config');
const { readdirSync } = require('fs');

//assets folder path
const assetsUri = config.assetsUri.replace(/\/\s*$/, "");
const { gutenBlocksName } = config;


/**
 * Get Directories
 * ----------
 * Excludes node_modules and .git from the directory files that is necessary to scan.
 *
 * @param   {String}  source 	The source to get directories from.
 *
 * @return  {Array}          	Directory names in the source.
 */
const getDirectories = (source) =>
    readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== "node_modules" && dirent.name !== ".git")
    .map(dirent => dirent.name);

const dirs = getDirectories(__dirname);

/**
 * To (path)
 * ----------
 * Returns a path without that just focus on the folders that's not excluded in this directory.
 *
 * @param   {String}  path  The final path. $dir will be replaced with the folders that is not excluded.
 *
 * @return  {Array}         An array with the final paths.
 */
const to = (path) => {
    return dirs.map((folder) => path.replace(/\$dir/g, folder));
}

//tasks for file handling
let fileHandling = [ "scripts", "styles" ];

//scripts tasks
gulp.task( "scripts", function( done ) {
    gulp.src(`${assetsUri}/js/customs/*.js`)
        //make all into one single min-file
        .pipe(concat('customs.js'))
        //babelize scripts
        .pipe(babel({
            presets: ['@babel/env']
        }))
        //set the location for where the unminimized file should be stored
		.pipe(gulp.dest(`${assetsUri}/js`))
        //minimize scripts
		.pipe(terser())
        //add .min to the file name
        .pipe(rename({ suffix: '.min' }))
        //set the location for where the minimized file should be stored
		.pipe(gulp.dest(`${assetsUri}/js`));
    gulp.src(`${assetsUri}/js/vendors/*.js`)
        //make all into one single min-file
        .pipe(concat('vendors.js'))
        //set the location for where the unminimized file should be stored
		.pipe(gulp.dest(`${assetsUri}/js`))
        //minimize scripts
        .pipe(terser())
        //add .min to the file name
        .pipe(rename({ suffix: '.min' }))
        //set the location for where the minimized file should be stored
		.pipe(gulp.dest(`${assetsUri}/js`));
    gulp.src(`${assetsUri}/js/specifics/*.js`)
        //babelize scripts
        .pipe(babel({
            presets: ['@babel/env']
        }))
        //set the location for where the unminimized file should be stored
		.pipe(gulp.dest(`${assetsUri}/js`))
        //minimize scripts
		.pipe(terser())
        //add .min to the file name
        .pipe(rename({ suffix: '.min' }))
        //set the location for where the minimized file should be stored
        .pipe(gulp.dest(`${assetsUri}/js`));

    done();
} );

//styles tasks - SASS
sass.compiler = require('node-sass');

gulp.task('styles', function( done ) {
    gulp.src(`${assetsUri}/styles/scss/style.scss`)
        //convert to sass
        .pipe(sass.sync().on('error', sass.logError))
        //group css media queries
        .pipe(gcmq())
        //prefix css
        .pipe(autoprefixer('last 2 versions'))
        //remove unused css from the final css
        //scan these files to see if css is used
        .pipe(purify([
            //the WP block block js
            `../../../wp-includes/js/dist/block-library.js`,
            //all js files in js warwick plugin dist folder
            `../../plugins/warwick-blocks/dist/*.js`,
            //all js files in js assets folder
            `${assetsUri}/js/*/**/*.js`,
            //all html files from root
            ...to("./$dir/**/*.html"),
            //all html files at root
            './*.html',
            //all php files from root
            ...to("./$dir/**/*.php"),
            //all php files at root
            './*.php',
        ]))
        //set the location for where the unminimized file should be stored
        .pipe(gulp.dest(`${assetsUri}/styles`))
        //compress css and mesh equal rules
        .pipe(cleanCSS({ level: { 2: { restructureRules: true } } }))
        //add .min to the file name
        .pipe(rename({ suffix: '.min' }))
        //set the location for where the minimized file should be stored
        .pipe(gulp.dest(`${assetsUri}/styles`));

    gulp.src(`${assetsUri}/styles/scss/editor.scss`)
        //convert to sass
        .pipe(sass.sync().on('error', sass.logError))
        //group css media queries
        .pipe(gcmq())
        //prefix css
        .pipe(autoprefixer('last 2 versions'))
        //remove unused css from the final css
        //scan these files to see if css is used
        .pipe(purify([
            //the WP block block js
            `../../../wp-includes/js/dist/block-library.js`,
            //the WP block editor js
            `../../../wp-includes/js/dist/block-editor.js`,
            //all js files in js warwick plugin dist folder
            `../../plugins/${gutenBlocksName}/dist/*.js`,
            //all js files in js assets folder
            `${assetsUri}/js/*/**/*.js`,
            //all html files from root
            ...to("./$dir/**/*.html"),
            //all html files at root
            './*.html',
            //all php files from root
            ...to("./$dir/**/*.php"),
            //all php files at root
            './*.php',
        ]))
        //set the location for where the unminimized file should be stored
        .pipe(gulp.dest(`${assetsUri}/styles`))
        //compress css and mesh equal rules
        .pipe(cleanCSS({ level: { 2: { restructureRules: true } } }))
        //add .min to the file name
        .pipe(rename({ suffix: '.min' }))
        //set the location for where the minimized file should be stored
        .pipe(gulp.dest(`${assetsUri}/styles`));

    done();
} );

//browsersync
gulp.task('browser-sync', function( done ) {
    browserSync.init(
        config.proxy ? config :
        { server:
            {
                baseDir: "./"
            },
            port: config.port
        }
    );

    done();
});

//on refresh event
gulp.task('reload', function( done ) {
    browserSync.reload();

    done();
} )

//watch tasks
gulp.task( "watch", function( done ) {
	gulp.watch( [
        //all js files in js assets folder
        `${assetsUri}/js/*/**/*.js`,
        //all scss files in styles assets folder
        `${assetsUri}/styles/**/*.scss`,
        //all html files from root
        ...to("./$dir/**/*.html"),
        //all html files at root
        './*.html',
        //all php files from root
        ...to("./$dir/**/*.php"),
        //all php files at root
        './*.php',
    ],
    gulp.series( fileHandling, "reload" ) );

    process.stdout.write(`
    Gutenberg blocks plugin name: "${gutenBlocksName}"
    ---------------------------------------------------------------------
    The name of your Gutenberg blocks folder is: ${gutenBlocksName}.
    This can be changed in the gulp config file.
    You can ignore this message if you're not using Gutenberg blocks.
    ---------------------------------------------------------------------
    \n`);

    process.stdout.write(`
    Asset folder location: "/${assetsUri}"
    ---------------------------------------------------------------------
    Your asset folder's location is relative from the gulpfile.js.
    It is located at: "/${assetsUri}".
    ---------------------------------------------------------------------
    \n`);

    done();
} );

//default tasks
gulp.task( "default", gulp.parallel( "scripts" , "styles", "watch", "browser-sync" ) );
