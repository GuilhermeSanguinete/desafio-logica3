const readline = require('readline');

// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === 'mago') {
      ataque = 'usou magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'usou espada';
    } else if (this.tipo === 'monge') {
      ataque = 'usou artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'usou shuriken';
    } else {
      ataque = 'atacou de forma desconhecida';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do herói: ', (nome) => {
  rl.question('Digite a idade do herói: ', (idadeStr) => {
    const idade = parseInt(idadeStr);

    rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipo) => {
      const heroi = new Heroi(nome, idade, tipo);
      heroi.atacar();
      rl.close();
    });
  });
});
