const fs = require("fs");
const path = require("path");
const readline = require("readline"); //Para receber entrada no terminal

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nome do arquivo para copiar: ", (nomeArquivo) => {
  rl.question("path do arquivo ", (pathArquivo) => {
    //Ler arquivo
    fs.readFile(path.join(pathArquivo, nomeArquivo), "utf-8", (error, data) => {
      if (error) {
        return console.log("Erro: ", error);
      }

      var copiaArquivo = "copia_" + nomeArquivo;

      //Criar e escrever no arquivo
      fs.writeFile(path.join(pathArquivo, copiaArquivo), data, (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Copia feita com sucesso!");
      });
    });
  });
});
