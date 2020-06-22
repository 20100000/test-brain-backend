const constants = {
  URL_SEED: 'https://monitoramento.sema.mt.gov.br/apfruralconsulta/',
  URL_ORIGIN:'https://monitoramento.sema.mt.gov.br'
}
const redis = {
  HOST: '127.0.0.1',
  PORT: '6379',
  HOST_PORT: 'redis://127.0.0.1:6379'
}

const mySql = {
  HOST: '127.0.0.1',
  PORT: '3606',
  PASSWORD: '',
  USER: 'root',
  DATABASE: 'brain'
}

module.exports = {
  constants,
  redis,
  mySql
}