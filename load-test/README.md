# Load-Test

Esse projeto contém os scripts de teste de carga do Globoplay escritos utilizando a ferramenta open-source K6.

## Estrutura do projeto

#### `es5`

Contém todo o conteúdo da pasta `k6` transpilado para a versão es5 do javascript, essa conversão é necessária em cenários aonde temos um grande volume de requisições. Podemos ver com mais detalhes essa orientação na documentação do [K6 - Running Large Tests](https://k6.io/docs/testing-guides/running-large-tests/#k6-options).
Essa pasta é atualizada em um step do CI que realiza a transpilação da pasta `k6` com os mesmos arquivos para o formato es5, sendo assim não existe a necessidade de qualquer alteração nessa pasta.

#### `k6/scenarios`

Aqui os scripts do K6 ficam divididos por plataforma (iOS, Web, Android, etc), onde cada arquivo representa um cenário isolado da interação do usuário no produto. Os cenários devem ser escritos seguindo o guide do K6 - https://k6.io/docs/testing-guides/api-load-testing/

#### `k6/utils`

Nessa pasta ficam as funções compartilhadas entre os cenários

#### `k6/setups`

Aqui ficam definidos os cenários completos de teste de carga composto por múltiplos scripts, também ficam definidos a duração do teste e VUs.

### `k6/test-base`

Aqui ficam os arquivos base usados nos testes de carga, como, por exemplo, tokens de authorization, ofertas e títulos.
Os arquivos aqui devem ser ter o formato `JSON`, caso receba uma base em `CSV`, consulte a sessão de `CSV to JSON`

## Variáveis de ambiente

- `TOTAL_VUS`: número total de VUs que serão utilizadas no teste de carga. VU's são os usuários simulados que executam iterações separadas e simultâneas no seu script de teste.
- `DURATION_MIXED_TEST`: duração do teste de carga, exemplo: `10s`

## Padrão de escrita do teste K6

Os scripts devem ser criados na pasta `k6/scenarios` de acordo com a plataforma do cenário.
Caso seja necessário utilizar uma base de dados na escrita do script, é necessário utilizar a estrutura [SharedArray](https://k6.io/docs/javascript-api/k6-data/sharedarray/) do K6 para garantir um melhor desempenho.
O código escrito deve seguir o modelo abaixo:

```javascript
import { sleep, group } from 'k6'
import http from 'k6/http'

export default () => {
  group('...' () => {
    http.get('...',)
  })

  sleep(0.1)
}
```

## Como rodar

Para conseguir rodar os scripts do projeto é necessário ter o k6 cli instalado em sua máquina, caso não tenha siga os passos definidos no guia do K6 - https://k6.io/docs/get-started/installation/
Com o CLI instalado basta rodar o comando abaixo apontando para o caminho do arquivo na pasta setup, conforme exemplo:

```
npm run k6 ./k6/setups/globoplay.js
```

### CSV to JSON

Normalmente a base de dados recebida para o teste de carga vem no formato CSV, porém para facilitar o uso dentro do código foi criado esse script que realiza a conversão de arquivos CSV para JSON, atualmente o código está definido para conversão da base de usuários, porém, dependendo do formato do arquivo recebido pode ser necessário ajustes nos nomes das colunas e no nome do arquivo de saída.
Para rodar o script basta utilizar o comando abaixo passando como argumento o caminho do arquivo CSV a ser convertido:

```
npm run csv-to-json ./glbids_tmp.csv
```

## Har to K6

Para facilitar a criação dos scripts K6, o projeto possui um script javascript que faz a leitura de um arquivo `.har` e converte para a estrutura esperada pelo K6.

Para utilizar essa funcionalidade será necessário ter um arquivo `.har` que contém as informações dos requests.
Siga os passos dessa [documentação](https://k6.io/docs/test-authoring/recording-a-session/har-converter/#record-a-har-file) para entender como gerar o arquivo `.har`
É necessário também habilitar a opção de `Desabilitar Cache` no navegador para que as requisições sejam exportadas de forma correta

Mova o arquivo `.har` gerado para a raiz do projeto e rode o comando preenchendo com o nome do arquivo conforme exemplo:

```
npm run har-to-k6 globoplay.har
```

Um arquivo de teste de carga k6 deve ser gerado na raiz do projeto utilizando o nome do arquivo fornecido no comando `globoplay-load-test.js`, lembrando que o arquivo gerado terá somente as requisições `GET` e que tenham `/graphql` na URL, caso seja necessário ter um filtro diferente será necessário alterar no arquivo `har-to-k6.js`.
