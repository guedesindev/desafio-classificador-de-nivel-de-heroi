import readline from 'readline'

//criação do readline rl
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (item) => {
  return new Promise((resolve) => {
    rl.question(item, (resposta) => resolve(resposta))
  })
}

async function main() {
  let qtdVitorias = parseInt(await question('Digite o número de vitórias: '))
  let qtdDerrotas = parseInt(
    await question('Digite a quantidade de derrotas: ')
  )

  console.log(`Qtd vitorias: ${qtdVitorias}`)

  const saldoVitorias = calcularSaldoVitorias(qtdVitorias, qtdDerrotas)
  console.log(saldoVitorias)

  const classificacao = classificarJogador(saldoVitorias)

  console.log(
    `O Herói tem saldo de ${saldoVitorias} está no nível de ${classificacao}`
  )

  rl.close()
}

function calcularSaldoVitorias(nVit, nDer) {
  console.log(`CalcularSaldoVitórias: ${nVit} - ${nDer} = ${nVit - nDer}`)
  return nVit - nDer
}

function classificarJogador(saldo) {
  if (saldo <= 10) {
    return 'Ferro'
  } else if (saldo > 10 && saldo <= 20) {
    return 'Bronze'
  } else if (saldo > 20 && saldo <= 50) {
    return 'Prata'
  } else if (saldo > 50 && saldo <= 80) {
    return 'Ouro'
  } else if (saldo > 80 && saldo <= 90) {
    return 'Diamante'
  } else if (saldo > 90 && saldo <= 100) {
    return 'Lendário'
  } else return 'Imortal'
}

main()
