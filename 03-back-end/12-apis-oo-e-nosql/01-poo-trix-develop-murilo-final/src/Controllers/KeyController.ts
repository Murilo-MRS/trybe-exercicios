import { NextFunction, Request, Response } from 'express';
import IKey from '../Interfaces/IKey';
import KeyService from '../Services/KeyService';

class KeyController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: KeyService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new KeyService();
  }

  public async create() {
    const key: IKey = {
      value: this.req.body.value,
      owner: this.req.body.owner,
      type: this.req.body.type,
    };

    try {
      const newKey = await this.service.register(key);
      return this.res.status(201).json(newKey);
    } catch (error) {
      this.next(error);
    }
  }

  public async getByValue() {
    const { value } = this.req.params;
    const key = await this.service.getByValue(value);
    return this.res.status(200).json(key);
  }

  public async getByOwner() {
    const { name } = this.req.params;
    const key = await this.service.getByOwner(name);
    return this.res.status(200).json(key);
  }
}

export default KeyController;