console.time("Todo");
let suma = 0;

console.time("bucle");
for (let i = 0; i < 10000000; i++) {
  suma++;
}
console.timeEnd("bucle");

let suma2 = 0;

console.time("bucle 2");
for (let j = 0; j < 100000; j++) {
  suma2++;
}
console.timeEnd("bucle 2");

console.log("Empieza el proceso asincrono");
console.time("Asincrona");
asincrona().then(() => {
  console.timeEnd("Asincrona");
});

console.timeEnd("Todo");

function asincrona() {
  return new Promise((res) => {
    setTimeout(function () {
      console.log("Termino el proceso asincrono");
      res();
    });
  });
}
