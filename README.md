<h1>Crawler com execução em fila para armazenamento em baco de dados.</h1>

<h3>Tecnologias usadas no projeto</h3>
Bull e redis para filas (queue)<br>
Bull-board para monitoramento da fila<br>
Docker com conterner redis <br/>
Cheerio para crawler<br/>
NodeJs es6 com framework Express para rotas das APIs<br/>
yarn gerenciador de pacotes </br>
MySql banco de dados </br>
Fetch para Curl 
<br/>

<h3>Requisitos para rodar projeto</h3>
Docker é extremamente necessário pora rodar o redis e armazenar a filas.

<h3>Passo a passo para iniciar projeto 
<h4>1° Clone o projeto</h4> 
<pre>
    git clone https://github.com/20100000/test-brain-backend.git<br/>
    cd test-brain-backend
</pre>
<h4>2° Instale as dependências</h4>  
na raiz do projeto
crie node_module com as dependências.<br/>
<pre>
    yarn install
</pre>
<h4>3° Iniciar contaner com redis</h4>
<pre>
    docker run --name redis_go -d -p 6379:6379 -d -t redis:alpine 
</pre>

redis_go e o nome da image, se preferir coloque o nome que quiser.<br/>
Rode o contener na porta 6379 é a porta padrão.<br/>

<h4>4° Iniciar projeto</h4>
<pre>
    yarn go
</pre>
ou
<pre>
    npm run go
</pre>
<h4>5̣° Banco de dados</h4>
Na raiz do projeto importar database brain.sql, execute mysql na porta 3306 ex: jdbc:mysql://localhost:3306/ <br>
Em src/common/config.js configure database valores padrão.<br>
  HOST: '127.0.0.1',<br>
  PORT: '3606',<br>
  PASSWORD: '',<br>
  USER: 'root',<br>
  DATABASE: 'brain'<br>

<h4>Rotas APIs</h4>
Monitoramento da fila
<pre>
GET
http://localhost:3000/dashboard/queues
</pre>

Inserir documentos para ser processado em fila
<pre>
POST
http://localhost:3000/brain
{
    "cpf": "036.176.038-82" 
}
</pre>

Consutar todos
<pre>
GET
http://localhost:3000/brain/
</pre>
Consutar por id
<pre>
GET
http://localhost:3000/brain/1
</pre>
Consutar monitoramento que o crawler encontro 
<pre>
GET
http://localhost:3000/brain/monitoramento/3
</pre>

Use front-end da aplicação
<pre>
git clone https://github.com/20100000/test-brain-frontend
</pre>
