# INSTALAR DEPENDENCIAS

npm install

# EXECUTAR O CODIGO

node src/recintos-zoo.js

# EXECUTAR O TESTE

npm test

### RECINTOS EXISTENTES

O zoológico possui os seguintes recintos disponíveis.

| número | bioma        | tamanho total | animais existentes |
| ------ | ------------ | ------------- | ------------------ |
| 1      | savana       | 10            | 3 macacos          |
| 2      | floresta     | 5             | vazio              |
| 3      | savana e rio | 7             | 1 gazela           |
| 4      | rio          | 8             | vazio              |
| 5      | savana       | 9             | 1 leão             |

### ANIMAIS

O zoológico só está habilitado a tratar dos animais abaixo.
A tabela mostra o espaço que cada indivíduo ocupa e em quais biomas se adapta.

| espécie    | tamanho | bioma              |
| ---------- | ------- | ------------------ |
| LEAO       | 3       | savana             |
| LEOPARDO   | 2       | savana             |
| CROCODILO  | 3       | rio                |
| MACACO     | 1       | savana ou floresta |
| GAZELA     | 2       | savana             |
| HIPOPOTAMO | 4       | savana ou rio      |

### ENTRADAS E SAÍDAS

1. O programa deve receber tipo e quantidade de animal (nessa ordem)
2. O programa deve retornar uma estrutura contendo a lista de todos os recintos viáveis ordenada pelo número do recinto (caso existam) e a mensagem de erro (caso exista)
3. A lista de recintos viáveis deve indicar o espaço livre que restaria após a inclusão do(s) animal(is) e o espaço total, no formato "Recinto nro (espaço livre: valorlivre total: valortotal)"
4. Caso animal informado seja inválido, apresentar erro "Animal inválido"
5. Caso quantidade informada seja inválida, apresentar erro "Quantidade inválida"
6. Caso não haja recinto possível, apresentar erro "Não há recinto viável"

### EXEMPLOS

Entrada para um caso válido

```js
"MACACO", 2;
```

Saída

```js
{
  recintosViaveis: [
    "Recinto 1 (espaço livre: 5 total: 10)",
    "Recinto 2 (espaço livre: 3 total: 5)",
    "Recinto 3 (espaço livre: 2 total: 7)",
  ];
}
```

Entrada para um caso inválido

```js
"UNICORNIO", 1;
```

Saída

```js
{
  erro: "Animal inválido";
}
```

Exemplo de chamada

```js
new RecintosZoo().analisaRecintos("MACACO", 2);
```

### INSTALANDO E RODANDO NA SUA MÁQUINA

1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:

```bash
npm install
```

### VALIDANDO A SOLUÇÃO

Junto com a estrutura básica você está recebendo alguns cenários de testes no arquivo `recintos-zoo.test.js` para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução.
Para testar sua solução com os cenários existentes ou novos, rode o seguinte comando:

```bash
npm test
```

Para saber mais consulte a [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started).

### VALIDANDO A ENTREGA

Para garantir que seu desafio vai ser considerado entregue, revise os seguintes pontos:

#### GIT

O repositório deve ser **público** e ter o **nome** e **branch** indicados na seção `ENTREGANDO O DESAFIO`.

Para verificar que o repositório é público, deslogue-se do github e tente ver o código. Se conseguir, nós também conseguimos! Lembrando que vamos usar o link para o usuário informado durante o cadastro na Gupy. Veja [como alterar a visibilidade](https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#changing-a-repositorys-visibility).

#### CÓDIGO

A solução deve ser entregue em **javascript** e a **estrutura de pastas e arquivos** deve seguir o indicado na seção `O CÓDIGO`.

O **export** da classe deve ser mantido da seguinte maneira para compatibilidade com o arquivo de testes:

```js
export { RecintosZoo as RecintosZoo };
```

Se todos os passos forem seguidos corretamente, você terá um repositório como o da figura abaixo (lembrando que é permitido criar mais arquivos), onde `seuUsername` é o seu usuário do GitHub, que você informou no questionário da Gupy.

![Exemplo de repositório](https://startdbstorage.blob.core.windows.net/filecontainer/imagem-estrutura.png)
