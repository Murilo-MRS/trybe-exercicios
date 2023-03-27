import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IKey from '../../../src/Interfaces/IKey';
import Key from '../../../src/Domain/Key/Key';
import KeyService from '../../../src/Services/KeyService';

describe('Testar rota key', function () {
  it('Criando uma chave de tipo CPF com SUCESSO', async function () {
    // Arrange
    const keyInput: IKey = {
      value: '478.966.190-32',
      owner: 'Jack C.',
      type: 'cpf',
    };
    const keyOutput: Key = new Key(
      '478.966.190-32',
      'Jack C.',
      'cpf',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'create').resolves(keyOutput);
    
    // Act
    const service = new KeyService();
    const result = await service.register(keyInput);
    
    // Assert
    expect(result).to.be.deep.equal(keyOutput);
  });

  const RESULT_ERROR = 'Invalid Key';

  it('Criando uma chave de tipo CPF inválida', async function () {
    // Arrange
    const keyInput: IKey = {
      value: '478.966.190-32XX',
      owner: 'Jack C.',
      type: 'cpf',
    };
    sinon.stub(Model, 'create').resolves({});
      
    // Act
    try {
      const service = new KeyService();
      await service.register(keyInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });

  it('Criando uma chave de tipo Phone Number com SUCESSO', async function () {
    // Arrange
    const keyInput: IKey = {
      value: '+55 (18) 99999-8888',
      owner: 'Abreu L.',
      type: 'phonenumber',
    };
    const keyOutput: Key = new Key(
      '+55 (18) 99999-8888',
      'Abreu L.',
      'phonenumber',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'create').resolves(keyOutput);

    // Act
    const service = new KeyService();
    const result = await service.register(keyInput);

    // Assert
    expect(result).to.be.deep.equal(keyOutput);
  });

  it('Criando chave de tipo Phone Number é inválida', async function () {
    // Arrange
    const keyInput: IKey = {
      value: '9999-8888',
      owner: 'Abreu L.',
      type: 'phonenumber',
    };
    sinon.stub(Model, 'create').resolves({});
        
    // Act
    try {
      const service = new KeyService();
      await service.register(keyInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });
  it('Criando chave de tipo E-mail com SUCESSO', async function () {
    const inputKey: IKey = {
      value: 'bruce.wayne@batman.com',
      owner: 'Wayne B.',
      type: 'mail',
    };
    const outputKey: Key = new Key(
      'bruce.wayne@batman.com',
      'Wayne B.',
      'mail',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'create').resolves(outputKey);
  
    const service = new KeyService();
    const result = await service.register(inputKey);
  
    expect(result).to.be.deep.equal(outputKey);
  });
  
  it('Criando chave de tipo E-mail é inválida', async function () {
    const keyInput: IKey = {
      value: 'bruce.Wayne#batman',
      owner: 'Wayne B.',
      type: 'mail',
    };
    sinon.stub(Model, 'create').resolves({});
      
    try {
      const service = new KeyService();
      await service.register(keyInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });
  it('Criando chave de tipo Random com SUCESSO', async function () {
    const keyInput: IKey = {
      value: '123e4567-e12b-12d1-a456-426655440000',
      owner: 'Martha',
      type: 'random',
    };
    const keyOutput: Key = new Key(
      '123e4567-e12b-12d1-a456-426655440000',
      'Martha',
      'random',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'create').resolves(keyOutput);

    const service = new KeyService();
    const result = await service.register(keyInput);

    expect(result).to.be.deep.equal(keyOutput);
  });

  it('Criando chave de tipo Random é inválida', async function () {
    const keyInput: IKey = {
      value: '123',
      owner: 'Martha',
      type: 'random',
    };
    sinon.stub(Model, 'create').resolves({});
  
    try {
      const service = new KeyService();
      await service.register(keyInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal(RESULT_ERROR);
    }
  });
  const phonenumber = '+55 (18) 99765-1187';
  it('Deveria buscar uma chave por valor com SUCESSO', async function () {
    const keyOutput: Key = new Key(
      phonenumber,
      'Jô Soares',
      'phonenumber',
      '633ec9fa3df977e30e993492',
    );
    sinon.stub(Model, 'findOne').resolves(keyOutput);

    const service = new KeyService();
    const result = await service.getByValue(phonenumber);

    expect(result).to.be.deep.equal(keyOutput);
  });
  it('Deveria retornar a lista de chaves cadastradas', async function () {
    const keyOutput = [new Key(
      phonenumber,
      'Jô Soares',
      'phonenumber',
      '633ec9fa3df977e30e993492',
    )];
    sinon.stub(Model, 'find').resolves(keyOutput);

    const service = new KeyService();
    const result = await service.getByOwner('Jô Soares');

    expect(result).to.be.deep.equal(keyOutput);
  });
  afterEach(function () {
    sinon.restore();
  });
});
