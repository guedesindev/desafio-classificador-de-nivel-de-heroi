import readline from 'readline'

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
    } else {
      return
    }
  }

  atacar() {
    return `O ${this.tipo} atacou usando ${this.ataque}`
  }
}

//Criando o coletor de tipo de herói que o usuário quer criar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (item) => {
  return new Promise((resolve) => {
    rl.question(item, (resposta) => resolve(resposta))
  })
}
let tipoHeroi = undefined
const tiposHerois = {
  1: 'mago',
  2: 'guerreiro',
  3: 'monge',
  4: 'ninja'
}

async function criarHeroi() {
  //Solicitar tipo de Heroi que o usuário quer criar
  console.log('Escolha o tipo de heroi que deseja criar:')
  //Opções de heróis
  for (let tipo in tiposHerois) {
    console.log(tipo + ' para ' + tiposHerois[tipo])
  }

  //Recebendo a opção de herói para criar
  let opcao = parseInt(await question('Digite sua opção: '))

  //Salvando o tipo de heroi de acordo com a escolha do usuário
  tipoHeroi = tiposHerois[opcao]
}

async function main() {
  //Enquanto o usuário não selecionar uma opção válida a aplicação sempre pedirá uma opção válida.
  do {
    await criarHeroi()
  } while (!tipoHeroi)
    
  //Criar um novo heroi de acordo com a escolha do usuário
  //Instância da classe Heroi
  const newHero = new Heroi(tipoHeroi)
  newHero.definirAtaque() //Definição do tipo de ataque do herói de acordo com a escolha do usuário
  console.log(newHero.atacar()) //Exibição da mensagem do tipo de herói e o ataque desferido.
  rl.close()
}

main()
