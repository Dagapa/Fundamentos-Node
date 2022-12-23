function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla ...");
    callbackHablar();
  });
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

function conversación(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversación(nombre, --veces, callback);
    });
  }else {
    adios(nombre, callback);
  }
}

// --

console.log("Iniciando proceso...");
hola('David', function(nombre) {
  conversación(nombre, 3, function() {
    console.log('Poceso terminado');
  })
})
// hola("David", function (nombre) {
//   hablar(function () {
//     adios(nombre, function () {
//       console.log("Terminando proceso...");
//     });
//   });
// });
