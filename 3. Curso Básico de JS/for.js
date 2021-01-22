var estudiantes = ["Maria", "Sergio", "Jose", "Pedro"];

function SaludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

// PRIMERA FORMA
// for (var i = 0; i < estudiantes.length; i++) {
//     SaludarEstudiantes(estudiantes[i]);
// }

// SEGUNDA FORMA
for (var estudiante of estudiantes) {
    SaludarEstudiantes(estudiante);
}