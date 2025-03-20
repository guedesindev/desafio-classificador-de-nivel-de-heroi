## Revisando Funções e Assincronismo com um Desafio de Classificação 🎮

Seguindo minha revisão de fundamentos de programação pela DIO, cheguei à parte de funções – com e sem retorno, com e sem parâmetros. O desafio da vez? Classificar um jogador com base no número de vitórias e derrotas em partidas ranqueadas.

### 📌 A ideia básica do desafio era simples:

Criar duas variáveis (numVit e numDerrotas).
Calcular a diferença entre elas.
Determinar a categoria do jogador usando um switch ou if-else.
Mas pensei: 🤔 "Por que não tornar esse código mais interativo?"
Decidi permitir que o próprio usuário digitasse os valores. Para isso, utilizei a biblioteca readline para capturar entradas no terminal.

**🔹 Transformando a Entrada de Dados em Assíncrona**

A função readline é assíncrona, ou seja, o código não espera automaticamente a resposta do usuário antes de continuar a execução. Para resolver isso, utilizei o conceito de Promises, que permite que o programa espere os dados antes de seguir para a próxima etapa.

### 🛠️ Passo a Passo da Implementação

1️⃣ Criar o readline:

```javascript
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
```

Agora, minha aplicação consegue ler a entrada do usuário.

2️⃣ Criar uma função para perguntar os valores:

```javascript
const pergunta = (texto) => {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => resolve(resposta))
  })
}
```

Essa função permite que eu faça perguntas ao usuário e espere a resposta antes de continuar.

3️⃣ Criar uma função assíncrona para capturar os dados:

```javascript
async function main() {
  let qtdVitorias = parseInt(await pergunta('Digite o número de vitórias: '))
  let qtdDerrotas = parseInt(await pergunta('Digite o número de derrotas: '))
  rl.close()
}
```

Aqui, converti a entrada do usuário para números inteiros usando parseInt(), garantindo que o programa possa trabalhar corretamente com os dados.

**🔹 Calculando o Saldo de Vitórias**

Agora, vamos criar uma função simples para calcular o saldo de vitórias:

```javascript
function calcularSaldoVitorias(nVit, nDer) {
  return nVit - nDer
}
```

Ela recebe o número de vitórias e derrotas e retorna o saldo.

**🔹 Classificando o Jogador**

```javascript
function classificarJogador(saldo) {
  if (saldo <= 10) return 'Ferro'
  else if (saldo <= 20) return 'Bronze'
  else if (saldo <= 50) return 'Prata'
  else if (saldo <= 80) return 'Ouro'
  else if (saldo <= 90) return 'Diamante'
  else if (saldo <= 100) return 'Lendário'
  else return 'Imortal'
}
```

Aqui, utilizei if-else, pois o switch não lida bem com intervalos de valores.

📌 "Mas por que não criar uma variável para armazenar a classificação antes de retorná-la?"
Optei por retornar diretamente o valor, já que cada condição só precisa ser avaliada uma vez, evitando o uso desnecessário de memória.

**🔹 Unindo tudo no main()**

Agora basta chamar os métodos dentro da função principal e exibir o resultado!

```javascript
async function main() {
  let qtdVitorias = parseInt(await pergunta('Digite o número de vitórias: '))
  let qtdDerrotas = parseInt(await pergunta('Digite o número de derrotas: '))

  const saldoVitorias = calcularSaldoVitorias(qtdVitorias, qtdDerrotas)
  const classificacao = classificarJogador(saldoVitorias)

  console.log(
    `O Herói tem saldo de ${saldoVitorias} e está no nível ${classificacao}`
  )

  rl.close()
}

main()
```

Agora o código recebe os valores, calcula o saldo e exibe a classificação do jogador.

🚀 Conclusão
Esse desafio me permitiu reforçar conceitos como:</br>
✔️ Entrada de dados no terminal com readline.</br>
✔️ Uso de Promises e async/await para manipular código assíncrono.</br>
✔️ Conversão de string para número (casting) com parseInt().</br>
✔️ Estruturas condicionais para classificação de dados.

Espero que tenha curtido essa jornada tanto quanto eu! 😃

Se quiser ver o código completo, acesse o repositório:
🔗 [GitHub](https://github.com/guedesindev/desafio-classificador-de-nivel-de-heroi/blob/main/desafio2.js)

Até a próxima! 🚀
