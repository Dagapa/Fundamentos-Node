const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //archivo leido
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) console.error("No he podido escribirlo " + err);
    else console.log('Se ha escrito correctamente');
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb)
}
// el console log pinta el texto en consola
//leer el archivo
leer(__dirname + "/archivo.txt", console.log);
//escribir y crear archivo
escribir(__dirname + "/archivo1.txt", 'Soy un archivo nuevo', console.log);
// borrar
borrar(__dirname + '/archivo1.txt', console.log)
