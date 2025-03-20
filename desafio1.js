//Todas as variáveis iniciadas com h, referem-se ao herói
import readline from 'readline' // Utilização do Readline para obter os dados do usuário

//Criação da estrutura do captador da entrada de dados
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**Uma vez que o readline é um método assincrono
 * se faz necessário utilizar Promise para esperar
 * a entrada de dados pelo usuário para que o
 * programa não continue a execução antes que os
 * dados sejam passados pelo usuário
 * Para isso criei o método question que é uma
 * função salva em um variável que será utilizada
 * para salvar o nome e o xp do herói
 * */
const question = (texto) => {
  return new Promise((resolve) => {
    leitor.question(texto, (resposta) => resolve(resposta))
  })
}

// function question(texto) {
//   return new Promise(function (resolve) {
//     leitor.question(texto, function (resposta) { resolve(resposta)})
//   })
// }

/** Por que criei um método async?
 * Como o readline é assincrono e a função
 * question é uma promise, então ela deve
 * ser executada dentro de um método async
 * com a flag awai informando ao node que deve
 * aguardar a execução da linha de código antes
 * de continuar com a execução do restante da aplicação.
 */
const main = async () => {
  let hNome = await question('Digite o nome do herói: ')
  let hXp = parseInt(await question('Qual é o teu XP de herói? '))

  let hNivel = ''

  if (hXp <= 1000) {
    hNivel = 'Ferro'
  } else if (hXp >= 1001 && hXp <= 2000) {
    hNivel = 'Bronze'
  } else if (hXp >= 2001 && hXp <= 5000) {
    hNivel = 'Prata'
  } else if (hXp >= 5001 && hXp <= 7000) {
    hNivel = 'Ouro'
  } else if (hXp >= 7001 && hXp <= 8000) {
    hNivel = 'Platina'
  } else if (hXp >= 8001 && hXp <= 9000) {
    hNivel = 'Ascendente'
  } else if (hXp >= 9001 && hXp <= 10000) {
    hNivel = 'Imortal'
  } else hNivel = 'Radiante'

  console.log(`O herói de nome ${hNome} está no nível ${hNivel}`)
  leitor.close() // é necessário dar o comenado para fechar o readline
}

main() //aqui chamamos o método main() para execução de toda parte principal da aplicação.
