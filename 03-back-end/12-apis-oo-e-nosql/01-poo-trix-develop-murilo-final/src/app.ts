// Rotas e middlewares devem ficar aqui// src/app.ts

import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import routes from './Routes/Routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);

export default app;