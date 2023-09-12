# API-Firebird

API-Firebird é uma API simples e sofisticada para interagir com o banco de dados Firebird usando Node.JS. Ela permite executar consultas SQL, inserir, atualizar e deletar dados, gerenciar transações e muito mais.

## Instalação

Para instalar a API, você pode usar o comando npm:

```bash
npm install API-Firebird
```

Ou você pode clonar o repositório do GitHub:

```bash
git clone https://github.com/API-Firebird/API-Firebird.git
```

## Uso

Para usar a API, você precisa importá-la no seu código:

```javascript
const firebird = require('API-Firebird');
```

Em seguida, você precisa criar uma conexão com o banco de dados, fornecendo os parâmetros necessários:

```javascript
const connection = firebird.createConnection({
  host: 'localhost', // ou o endereço IP do servidor
  port: 3050, // ou a porta do servidor
  database: 'test.fdb', // ou o caminho do arquivo do banco de dados
  user: 'sysdba', // ou o nome do usuário
  password: 'masterkey' // ou a senha do usuário
});
```

Depois de criar a conexão, você pode executar consultas SQL usando o método `query`:

```javascript
connection.query('SELECT * FROM CUSTOMERS', (err, result) => {
  if (err) {
    console.error(err); // se ocorrer um erro, mostre-o
  } else {
    console.log(result); // se não, mostre o resultado
  }
});
```

O método `query` aceita dois parâmetros: uma string contendo a consulta SQL e uma função de callback que recebe dois argumentos: um objeto de erro (se houver) e um objeto de resultado. O objeto de resultado contém as propriedades `fields` (um array com os nomes dos campos) e `rows` (um array com os valores dos registros).

Você também pode inserir, atualizar ou deletar dados usando o método `query`, por exemplo:

```javascript
connection.query('INSERT INTO CUSTOMERS (ID, NAME, EMAIL) VALUES (1, "John Doe", "john.doe@example.com")', (err, result) => {
  if (err) {
    console.error(err); // se ocorrer um erro, mostre-o
  } else {
    console.log(result); // se não, mostre o resultado
  }
});
```

Se você precisar executar várias consultas em uma única transação, você pode usar o método `beginTransaction` para iniciar uma transação e o método `commit` ou `rollback` para finalizá-la:

```javascript
connection.beginTransaction((err, transaction) => {
  if (err) {
    console.error(err); // se ocorrer um erro, mostre-o
  } else {
    transaction.query('UPDATE CUSTOMERS SET NAME = "Jane Doe" WHERE ID = 1', (err, result) => {
      if (err) {
        console.error(err); // se ocorrer um erro, mostre-o
        transaction.rollback(); // e desfaça as alterações
      } else {
        console.log(result); // se não, mostre o resultado
        transaction.commit(); // e confirme as alterações
      }
    });
  }
});
```

O método `beginTransaction` aceita um parâmetro: uma função de callback que recebe dois argumentos: um objeto de erro (se houver) e um objeto de transação. O objeto de transação tem os mesmos métodos que o objeto de conexão (`query`, `commit` e `rollback`), mas opera dentro da transação iniciada.

## Documentação

Para mais informações sobre a API, consulte a documentação completa no [site oficial].

## Licença

API-Firebird é licenciado sob a [licença MIT].

Espero que isso seja útil para você. Se você quiser que eu gere mais conteúdo para você, basta me perguntar. 😊

: https://API-Firebird.github.io/
: https://github.com/API-Firebird/API-Firebird/blob/master/LICENSE
