class Heroi {
  constructor(tipo) {
    this.tipo = tipo
    this.ataque = ''
  }

  definirAtaque() {
    if (this.tipo === 'mago') {
      this.ataque = 'magia'
    } else if (this.tipo === 'guerreiro') {
      this.ataque = 'espada'
    } else if (this.tipo === 'monge') {
      this.ataque = 'artes marciais'
    } else if (this.tipo === 'ninja') {
      this.ataque = 'shiriken'
    }
  }

  atacar() {
    return `O ${this.tipo} atacou usando ${this.ataque}`
  }
}

const guerreiro = new Heroi('guerreiro')

guerreiro.definirAtaque()
console.log(guerreiro.atacar())

const mago = new Heroi('mago')
mago.definirAtaque()
console.log(mago.atacar())
