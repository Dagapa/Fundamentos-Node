let i = 1;
let intervalo = setInterval(function () {
  console.log("Hola");
  if (i === 3) {
    clearInterval(intervalo)
  }
  i++;
}, 1000);

setImmediate(function(){
  console.log('Hola');
})
