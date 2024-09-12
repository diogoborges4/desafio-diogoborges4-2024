import readline from "readline";

class RecintosZoo {
  constructor() {
    this.recintos = [
      {
        nome: "Recinto 1",
        total: 10,
        livre: 7,
        bioma: "savana",
        currentAnimal: "MACACO",
        sameSpecies: false,
      },
      {
        nome: "Recinto 2",
        total: 5,
        livre: 5,
        bioma: "floresta",
        currentAnimal: "",
        sameSpecies: false,
      },
      {
        nome: "Recinto 3",
        total: 7,
        livre: 5,
        bioma: "savana e rio",
        currentAnimal: "GAZELA",
        sameSpecies: false,
      },
      {
        nome: "Recinto 4",
        total: 8,
        livre: 8,
        bioma: "rio",
        currentAnimal: "",
        sameSpecies: true,
      },
      {
        nome: "Recinto 5",
        total: 9,
        livre: 6,
        bioma: "savana",
        currentAnimal: "LEAO",
        sameSpecies: true,
      },
    ];

    this.animaisValidos = [
      {
        especie: "LEAO",
        bioma: "savana",
        tamanho: 3,
        carnivoro: true,
        onlyCondition: false,
      },
      {
        especie: "LEOPARDO",
        bioma: "savana",
        tamanho: 2,
        carnivoro: true,
        onlyCondition: false,
      },
      {
        especie: "CROCODILO",
        bioma: "rio",
        tamanho: 3,
        carnivoro: true,
        onlyCondition: false,
      },
      {
        especie: "MACACO",
        bioma: "savana e floresta",
        tamanho: 1,
        carnivoro: false,
        onlyCondition: false,
      },
      {
        especie: "GAZELA",
        bioma: "savana",
        tamanho: 1,
        carnivoro: false,
        onlyCondition: false,
      },
      {
        especie: "HIPOPOTAMO",
        bioma: "savana e rio",
        tamanho: 4,
        carnivoro: false,
        onlyCondition: true,
      },
    ];
  }

  analisaRecintos(animal, quantidade) {
    const especieAnimal = this.animaisValidos.find(
      (item) => item.especie === animal.toUpperCase() // Verificando se o animal é válido
    );

    if (!especieAnimal) {
      console.log("Animal inválido");
      return {
        erro: "Animal inválido", // Define o erro como "Animal inválido"
        recintosViaveis: false, // Não há recintos viáveis
      };
    }
    if (animal && quantidade <= 0) {
      console.log("Quantidade inválida");
      return {
        erro: "Quantidade inválida", // Verificando se a quantidade de animais é válida
        recintosViaveis: false,
      };
    }
    if (quantidade > 9) {
      console.log("Não há recintos viável");
      return {
        erro: "Não há recinto viável", // Verificando se existem recistos suficientes para a quantidade de animais
        recintosViaveis: false,
      };
    }

    const biomasDoAnimal = especieAnimal.bioma.split(" e ");
    const recintosValidos = [];

    if (this.animaisValidos) {
      for (let i = 0; i < 5; i++) {
        const recinto = this.recintos[i];

        if (especieAnimal.carnivoro) {
          if (
            recinto.currentAnimal.includes(especieAnimal.especie) ||
            recinto.sameSpecies === true
          ) {
            if (
              biomasDoAnimal.some((biomaAnimal) =>
                recinto.bioma.includes(biomaAnimal)
              ) &&
              recinto.livre >= especieAnimal.tamanho
            ) {
              recintosValidos.push(recinto); // Adiciona o recinto à lista de recintos válidos
            }
          }
        }
        // Verifica se o bioma do recinto é compatível e se há espaço suficiente
        if (
          !especieAnimal.carnivoro &&
          !especieAnimal.onlyCondition &&
          biomasDoAnimal.some((biomaAnimal) =>
            recinto.bioma.includes(biomaAnimal)
          ) &&
          !recinto.sameSpecies &&
          recinto.livre >= especieAnimal.tamanho
        ) {
          recintosValidos.push(recinto); // Adiciona o recinto à lista de recintos válidos
        }

        if (especieAnimal.onlyCondition) {
          if (recinto.bioma === especieAnimal.bioma) {
            recintosValidos.push(recinto);
          }
        }
      }
    }

    if (recintosValidos.length > 0) {
      // Adicionar o animal ao primeiro recinto válido e atualizar o espaço livre
      let count = 0;

      this.recintos.forEach((recinto) => {
        if (count < 2) {
          recinto.livre -= especieAnimal.tamanho * quantidade;
          return;
        }
        count++;
      });
    }

    const recintoFormatado = recintosValidos.map(
      (item) =>
        `${item.nome} (espaço livre: ${item.livre} total: ${item.total})`
    );

    // Se não houver recintos viáveis, retornar erro
    if (recintosValidos.length === 0) {
      return {
        erro: "Sem recintos disponíveis",
        recintosViaveis: false,
      };
    }
    console.log(recintoFormatado);
    // Retornar recintos viáveis
    return {
      erro: null,
      recintosViaveis: recintoFormatado,
    };
  }

  async capturarDados() {
    const { animal, quantidade } = await capturarPalavraENumero();
    this.analisaRecintos(animal, quantidade);
  }
}

//pega informaçoes do input e devolve para a função

const capturarPalavraENumero = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    let dados = {};

    // Capturar a palavra
    rl.question("Digite o nome do animal: ", (animal) => {
      dados.animal = animal;

      // Capturar o número
      rl.question("Digite a quantidade: ", (quantidade) => {
        const numeroConvertido = Number(quantidade);

        // Verificar se o número é válido
        if (isNaN(numeroConvertido)) {
          console.log("Por favor, insira um número válido.");
          rl.close();
        } else {
          dados.quantidade = numeroConvertido;
          rl.close();
          resolve(dados); // Devolver os dados capturados
        }
      });
    });
  });
};

const processar = new RecintosZoo();
processar.capturarDados();

export { RecintosZoo as RecintosZoo };
