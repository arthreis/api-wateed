const { Router } = require('express');

import StoreController from './controllers/StoreController';

const routes = Router();

routes.get('/stores', StoreController.index);

module.exports = routes;
