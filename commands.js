const fs = require("fs");
const axios = require("axios");

module.exports = {
  pwd: function () {
    return process.argv[1];
  },

  date: function () {
    return new Date();
  },

  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    return palabrasSeparadas.join(" ");
  },

  cat: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      process.stdout.write(data.toString());
    }); // recibimos un buffer, para que podamos leer el mismo tenemos que convertirlo a string

    return path;
  },

  head: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.slice(0, 5);
      let finalFinal = final.join("\n");
      process.stdout.write(finalFinal);
    });

    return path;
  },

  tail: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.slice(resultado.length - 5);
      let finalFinal = final.join("\n");
      process.stdout.write(finalFinal);
    });

    return path;
  },

  sort: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;

      let texto = data.toString();
      let resultado = texto.split("\n");
      resultado.sort();
      let final = resultado.join("\n");
      process.stdout.write(final);
    });

    return path;
  },

  wc: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;

      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.length.toString();

      process.stdout.write(final);
    });

    return path;
  },

  uniq: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;

      let texto = data.toString();
      let resultado = texto.split("\n");
      let unicos = resultado.filter((a, b, c) => c.indexOf(a) == b);
      let final = unicos.join("\n");
      process.stdout.write(final);
    });

    return path;
  },

  curl: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas[0];

    axios
      .get(path)
      .then((response) => {
        process.stdout.write(response.data);
      })
      .catch(console.log("Error en la carga"));

    return path;
  },
};
