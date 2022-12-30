console.log("Algo");
console.error("Error");
console.warn("Warn");

var tabla = [
  { a: 1, b: "z" },
  { a: 2, b: "otra" }
];

console.table(tabla);

console.group('conversacion');
console.log('Hola');
console.log('bla bla bla');
console.log('Adios');
console.groupEnd('conversacion');

console.log('Otra cosa');

function funcion1() {
  console.group("funcion1");
  console.log('Esto es de la funcion 1');
  console.log('Esto tambien');
  funcion2();
  console.groupEnd("funcion1");
}

function funcion2() {
  console.group("Funcion 2");
  console.log('Ahora estamos en la funcion 2');
  console.groupEnd("Funcion 2");
}

console.log("Empezamos");
funcion1();

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')
