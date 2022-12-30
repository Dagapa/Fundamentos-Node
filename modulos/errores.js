function otraFuncion() {
  seRompe();
}
//Error sincrono
function seRompe() {
  return 3 + z;
}

//Error asincrono
function seRompeAsincrona(cb) {
  setTimeout(function () {
    try{
      return 3 + z;
    } catch (err) {
      console.error('Error en la funcion asincrona');
      cb(err)
    }
  });
}

try {
  // seRompe();
  seRompeAsincrona(function(err) {
    console.log(err.message);
  })
} catch (err) {
  console.log("Algo se ha roto...");
  //err.message nos da una descripcion legible del error
  console.error(err.message);
  console.log("No pasa nada lo hemos capturado");
}

console.log("esto de aqui esta al final");
