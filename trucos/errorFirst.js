function asicrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error, null);
    }
  }, 1000);
}

asicrona(function (err, dato) {
  if (err) {
    console.error("Tenemos un error");
    console.error(err.message);
    return false;
    // throw Error(err) //NO VA A FUNCIONAR
  }

  console.log("todo ha ido bien mi data es: " + dato);
});
