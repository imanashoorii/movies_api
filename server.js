const http = require('http');
const chalk = require('chalk')
const app = require('./app');

const PORT = process.env.PORT || 8081;

const server = http.createServer(app)

server.listen(PORT)

console.log(chalk.blue.inverse(`Server is running on port ${PORT}`))