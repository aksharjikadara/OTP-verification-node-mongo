const express = require('express');
const compression = require('compression');

const CONFIG = require('../config/config');
const logger = require('./logger');

const packageJson = require('../package.json');

const app = express();

app.use(express.json());
app.use(compression());

app.get('/', async (req, res) => res.send('Welcome to nodejs'));

app.get('/version', (req, res) => {
  res.json({
    version: packageJson.version,
  });
});

app.listen(CONFIG.port, () => {
  logger.info(`Server is running on http://localhost:${CONFIG.port}`);
});
