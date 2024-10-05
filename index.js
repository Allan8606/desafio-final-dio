class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "Mago") {
            ataque = "Magia";
        } else if (this.tipo === "Guerreiro") {
            ataque = "Espada";
        } else if (this.tipo === "Monge") {
            ataque = "Artes Marciais";
        } else if (this.tipo === "Ninja") {
            ataque = "Shuriken";
        } else {
            console.log("Você não escolheu um tipo de herói valido");
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new heroi("Kage", 31, "Ninja");
heroi1.atacar();
