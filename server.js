const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const config = require('config');
const port = process.env.PORT || config.get('port');

require('./libs/db/mongo');

const app = new Koa();

const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();
middlewares.forEach(middleware => app.use(require('./middlewares/' + middleware)));

app.use(require('./routes'));

app.listen(port);

console.log(`Server is running (${port})...`);
