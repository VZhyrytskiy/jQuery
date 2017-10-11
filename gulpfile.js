// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();

var source = [
        'app/**/*.js',
        "!app/vendor/**/*.*"
    ];

gulp.task('webserver', function() {
    return gulp
        .src('.')                                        // root
        .pipe(plug.webserver({
            livereload: true,                            // livereload
            directoryListing: true,
            // to open page type:
            // http://localhost:8000/1/01_BasicSelectors.html
            open: "http://localhost:8000/index.html"
    }));
});

gulp.task("watch", function() {
    return gulp
        .watch(source)
        .on("change", function(event) {
            console.log("*** File " + event.path + " was " + event.type + ", running tasks...");
        });
});

// The default task is 'webserver'
gulp.task("default", ["webserver", "watch"]);

/*
    if you don't use the default name if gulpfile.js,
    run gulp like this:
    gulp --gulpfile youFileName taskname
*/