import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../src/App';
import IPost from '../../src/api/interfaces/IPost';
import Post from '../../src/database/models/PostModel';
import Sinon from 'sinon';
import { Model } from 'sequelize';

chai.use(chaiHttp);

describe('Testes para rota Post', () => {
  const app = new App();

  afterEach(() => {
    Sinon.restore();
  })

  it('Deve cadastrar um post com sucesso', async () => {
    // Arrange
    const post = {
      title: 'Post Teste',
      content: 'Meu primeiro post'
    }
    // Action
    const response = await chai.request(app.app).post('/post').send(post);

    // Assertion
    expect(response.status).to.be.equal(201);   
  });

  it('Deve cadastrar um post com sucesso e retornar o objeto criado', async () => {
    // Arrange
    // GIVEN
    const inputMock: IPost = {
      title: 'Typescript na pratica',
      content: 'Typescript é uma boa ferramenta para ajudar no POO',
    }
    const outputMock: Post = {
      id: 1,
      title: 'Typescript na pratica',
      content: 'Typescript é uma boa ferramenta para ajudar no POO',
    } as Post;

    // WHEN
    Sinon.stub(Model, 'create').resolves(outputMock);

    // Action
    const response = await chai.request(app.app).post('/post').send(inputMock);

    // Assertion
    expect(response.body).to.be.deep.equal(outputMock);
  });

  it('Deve retornar 404, quando o id não existir', async () => {

    Sinon.stub(Model, 'findOne').resolves(null);
    const response = await chai.request(app.app).get('/post:1');
    expect(response.status).to.be.equal(404);
  });
});