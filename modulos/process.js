process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});
process.on("exit", () => {
  console.log("El proceso acabo");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 0);
});

setTimeout(() => {
  console.log("Esto si se va a ver");
}, 0);

process.on("uncaughtException", (err, org) => {
  console.log("Se nos ha olvidado capturar un error");
  setTimeout(() => {
    console.log("Esto viene de las excepciones");
  }, 0);
});

functionquenoexiste();

console.log("Esto si el error no se recoge no sale");
