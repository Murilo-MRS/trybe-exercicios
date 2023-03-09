import { Model } from "sequelize";
import { expect } from "chai";
import Sinon from "sinon";
import PostService from "../../../src/api/services/PostService";
import Post from "../../../src/database/models/PostModel";

describe('Testes de serviço: Read all Posts', function() {
  afterEach(function () {
    Sinon.restore();
  });
  
  it('Caso 1: Deve ler uma lista com 1 Post', async function () {
    // GIVEN
    const outputMock: Post[] = [new Post({
      id: 1,
      title: 'Typescript na pratica',
      content: 'Typescript é uma boa ferramenta para ajudar no POO',
    })];

    // WHEN
    Sinon.stub(Model, 'findAll').resolves(outputMock);
    const service = new PostService();
    const result = await service.readAll();

    // THEN
    expect(result).to.be.equal(outputMock);
    expect(result.length).to.be.equal(1);
  });
});