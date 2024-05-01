COMO RODAR O PROJETO 

Instalar todas as dependencias do arquivo package.json
### npm install

Criar base de dados no MySQL (necessario alterar as credencias do banco de dados no arquivo .env) 
### npx sequelize-cli db:migrate

Rodar projeto
### node index.js

Rodar projeto usando o nodemon
### nodemon index.js