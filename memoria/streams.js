const fs = require("fs");
const { Transform } = require("stream");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("utf-8");

// readableStream.on("data", function (chunk) {
//   data += chunk;
// });

// readableStream.on('end', function() {
//   console.log(data);
// });

// process.stdout.write('Hola');

const transform = stream.Transform;

function mayusculas() {
  Transform.call(this);
}
util.inherits(mayusculas, Transform);

mayusculas.prototype._transform = function (chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

let mayus = new mayusculas();
readableStream.pipe(mayus).pipe(process.stdout);
