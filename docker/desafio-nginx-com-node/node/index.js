const express = require('express');
const mysql = require('mysql');

// Configurações do banco de dados
const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

// Função para criar uma nova conexão
function createConnection() {
  const connection = mysql.createConnection(dbConfig);
  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      setTimeout(createConnection, 2000); // Tentar reconectar após 2 segundos
    } else {
      console.log('Conectado ao banco de dados MySQL.');
    }
  });

  connection.on('error', (err) => {
    console.error('Erro de conexão:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      createConnection(); // Recriar a conexão
    } else {
      throw err;
    }
  });

  return connection;
}

const db = createConnection();

const app = express();

function addPeople() {
    db.query(`insert into tb_people (name) values ('De Arrascaeta')`)
}

app.get('/', (req, res) => {
    addPeople()
    db.query('SELECT name FROM tb_people', (err, results) => {
        if (err) {
        res.send('Erro ao buscar dados no banco de dados.');
        return;
        }

        let namesList = '';
        results.forEach(row => {
        namesList += `<li>${row.name}</li>`;
        });

        const response = `
        <h1>Full Cycle Rocks!</h1>
        <ul>
            ${namesList}
        </ul>
        `;

        res.send(response);
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
