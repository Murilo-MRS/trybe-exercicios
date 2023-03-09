import 'express-async-errors';
import express from 'express';
import postRoutes from './api/routes/PostRoutes';
import ErrorHandler from './api/middlewares/ErrorHandler';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.initAuthHeader();
    this.initRoutes();
    this.initMiddlewares();
  }

  /**
   * Este método configura acesso de entrada a sua api
   */
  private initAuthHeader(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  /**
   * Inicialize rotas aqui
   */
  private initRoutes(): void {
    this.app.use(postRoutes);
  }

  private initMiddlewares() {
    this.app.use(ErrorHandler.handle);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;