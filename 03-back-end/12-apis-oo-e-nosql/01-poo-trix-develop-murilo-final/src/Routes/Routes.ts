// src/Routes/Routes.ts

import { Router } from 'express';
import TransferController from '../Controllers/TransferController';
import KeyController from '../Controllers/KeyController';

const routes = Router();

routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
);

routes.patch(
  '/transfer/:id',
  (req, res, next) => new TransferController(req, res, next).reversalRequest(),
);

routes.get(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).getAllTransfers(),
);

routes.get(
  '/transfer/:key',
  (req, res, next) => new TransferController(req, res, next).getByKey(),
);

routes.post(
  '/key/register',
  (req, res, next) => new KeyController(req, res, next).create(),
);

routes.get(
  '/key/:value',
  (req, res, next) => new KeyController(req, res, next).getByValue(),
);

routes.get(
  '/key/owner/:name',
  (req, res, next) => new KeyController(req, res, next).getByOwner(),
);

export default routes;