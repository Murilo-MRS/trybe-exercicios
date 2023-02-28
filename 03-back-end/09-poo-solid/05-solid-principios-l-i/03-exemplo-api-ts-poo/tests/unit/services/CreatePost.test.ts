import { Model } from "sequelize";
import { expect } from "chai";
import Sinon from "sinon";
import IPost from "../../../src/api/interfaces/IPost";
import PostService from "../../../src/api/services/PostService";
import Post from "../../../src/database/models/PostModel";

describe('Testes de serviço: Create Post', function() {
  afterEach(function () {
    Sinon.restore();
  });

  it('Caso 1: Deve criar um novo Post', async function () {
    // GIVEN
    const inputMock: IPost = {
      title: 'Typescript na pratica',
      content: 'Typescript é uma boa ferramenta para ajudar no POO',
    }
    const outputMock: Post = new Post({
      id: 1,
      title: 'Typescript na pratica',
      content: 'Typescript é uma boa ferramenta para ajudar no POO',
    });

    // WHEN
    Sinon.stub(Model, 'create').resolves(outputMock);
    const service = new PostService();
    const result = await service.create(inputMock);

    // THEN
    expect(result).to.be.equal(outputMock);
  });
});