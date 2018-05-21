var gulp = requiere("gulp");
var ts = require("gulp-typescript");
//se crea un proyecto a partir de un json (con todas las propiedades del archivo)
var tsProject = ts.createProject("tsconfig.json");

//crear tareas con gulp 
//se ejecuta una sola vez
gulp.task("default", function(){
    // a la carpeta destino que en este caso es dist
    return tsProject.src().pipe(tsProject).js.pipe(gulp.dest("dist"));
});
