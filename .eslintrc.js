module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'], // Ponto e vírgula no final de cada instrução
    quotes: ['error', 'single'], // Aspas simples em vez de aspas duplas
    indent: ['error', 2], // Dois espaços de indentação
    'linebreak-style': ['error', 'unix'], // Estilo de quebra de linha Unix
    'no-console': 'warn', // Evitar o uso de console.log em produção
    'no-unused-vars': 'error', // Detectar variáveis não utilizadas
    eqeqeq: 'error', // Exigir uso estrito de igualdade (===)
    'arrow-parens': ['error', 'always'], // Exigir parênteses em torno de argumentos de função em setas
    'no-multiple-empty-lines': ['error', { max: 1 }], // No máximo uma linha em branco consecutiva
    'comma-dangle': ['error', 'always-multiline'],
  },
  reportUnusedDisableDirectives: true,
};