import { ModelStatic } from "sequelize";
import Post from "../../database/models/PostModel";
import IdNotFoundError from "../errors/IdNotFoundError";
import IPost from "../interfaces/IPost";
import IServicePost from "../interfaces/IServicePost";

const ID_NOT_FOUND = 'ID não existe';

export default class PostService implements IServicePost{
  protected model: ModelStatic<Post> = Post;

  async create(dto: IPost): Promise<Post> {
    return await this.model.create({ ...dto });
  }
  async readAll(): Promise<Post[]> {
    return await this.model.findAll();
  }
  async readById(id: number): Promise<Post> {
    const post = await this.model.findOne({ where: { id: id } });
    if(!post) throw new IdNotFoundError(ID_NOT_FOUND);
    return post;
  }
  update(id: string, dto: IPost): Promise<Post> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}