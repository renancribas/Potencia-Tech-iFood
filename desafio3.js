class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  atacar() {
      let ataque;

      switch (this.tipo) {
          case "mago":
              ataque = "magia";
              break;
          case "guerreiro":
              ataque = "espada";
              break;
          case "elfo":
              ataque = "arco";
              break;
          case "orc":
              ataque = "machado";
              break;
          case "anao":
              ataque = "martelo";
              break;
        }

      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

let mago = new Heroi("Gandalf", 9000, "mago");
let guerreiro = new Heroi("Aragorn", 87, "guerreiro");
let elfo = new Heroi("Legolas", 2931, "elfo"); 

mago.atacar();
guerreiro.atacar();
elfo.atacar();
