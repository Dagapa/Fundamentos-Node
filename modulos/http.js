const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;
    default:
      res.write("Error 404");
      res.end();
      break;
  }

  res.writeHead(201, { "Contet-Type": "text/plain" });

  //Escribir la respuesta al usuario
  res.write("Hola ya se usar http de nodeJs");

  res.end();
}

console.log("Escuchando http en el puerto 3000");
