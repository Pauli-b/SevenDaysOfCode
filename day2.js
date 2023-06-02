
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o seu nome? ", function(meuNome) {
  rl.question("Qual a sua idade? ", function(minhaIdade) {
    rl.question("Qual linguagem de programação você está estudando? ", function(linguagem) {
      console.log("Olá " + meuNome + ", você tem " + minhaIdade + " anos e já está aprendendo " + linguagem + "!");
      
      rl.question("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO ", function(resposta) {
        if (resposta === '1') {
          console.log("Muito bom! Continue estudando e você terá muito sucesso.");
        } else if (resposta === '2') {
          rl.question("Ahh que pena... Já tentou aprender outras linguagens? Responda com o número 1 para SIM ou 2 para NÃO ", function(respostaDois) {
            if (respostaDois === '1') {
              rl.question("Boa! Qual linguagem você tem interesse em aprender? ", function(linguagemDois) {
                console.log("Ótima escolha! Também gosto muito de " + linguagemDois + "!");
                rl.close();
              });
            } else {
              console.log("Sem problemas! Obrigada por responder.");
              rl.close();
            }
          });
        } else {
          console.log("Resposta inválida.");
          rl.close();
        }
      });
    });
  });
});
