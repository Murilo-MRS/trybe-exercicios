import IServicePost from '../interfaces/IServicePost';
import { Request, Response } from 'express';

class PostController {
  private _service: IServicePost;

  constructor(service: IServicePost) {
    this._service = service;
  }

  async create(req: Request, res: Response) {
    const { title, content } = req.body;
    const result = await this._service.create({ title, content })
    return res.status(201).json(result);
  }

  async readById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readById(parseInt(id));
    return res.status(200).json(result);
  }
}

export default PostController;