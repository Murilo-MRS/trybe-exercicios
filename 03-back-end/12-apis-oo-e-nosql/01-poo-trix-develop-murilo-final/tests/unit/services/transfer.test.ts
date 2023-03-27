// tests/unit/services/transfer.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IPayment from '../../../src/Interfaces/IPayment';
import TransferService from '../../../src/Services/TransferService';
import Payment from '../../../src/Domain/Payment/Payment';
import { outputArray } from '../mocks/transfer.mock';
import PaymentStatus from '../../../src/utils/PaymentStatus';
import Key from '../../../src/Domain/Key/Key';

describe('Teste rota transfer', function () {
  const cpf = '858.898.670-16';
  describe('Deveria criar uma transferência TRIX', function () {
    it('Deveria criar uma transferência TRIX com SUCESSO', async function () {
      // Arrange
      const paymentInput: IPayment = {
        payByPerson: 'Jobs',
        payToPerson: 'Wozniak',
        amount: 50000,
        key: cpf,
      };
      const paymentOutput: Payment = new Payment(
        'Jobs',
        'Wozniak',
        50000,
        cpf,
        '63319d80feb9f483ee823ac5',
      );
      const outputKey: Key = new Key(
        cpf,
        'Wozniak',
        'cpf',
        '633ec9fa3df977e30e993492',
      );
      sinon.stub(Model, 'create').resolves(paymentOutput);
      sinon.stub(Model, 'findOne').resolves(outputKey);
  
      // Act
      const service = new TransferService();
      const result = await service.transfer(paymentInput);
  
      // Assert
      expect(result).to.be.deep.equal(paymentOutput);
    });
  
    it('Deveria lançar uma exceção quando a key é inválida', async function () {
      // Arrange
      const paymentInput: IPayment = {
        payByPerson: 'Jobs',
        payToPerson: 'Wozniak',
        amount: 50000,
        key: '858.898.670-16XX', // 👀 observe que estamos passando um CPF inválido para capturar a exceção!
      };
  
      sinon.stub(Model, 'create').resolves({});
      sinon.stub(Model, 'findOne').resolves(undefined);
  
      // Act
      try {
        const service = new TransferService();
        await service.transfer(paymentInput);
      } catch (error) {
        // Assert
        expect((error as Error).message).to.be.equal('Key not found');
      }
    });
      
    afterEach(function () {
      sinon.restore();
    });  
  });
  describe('Deveria buscar todas as transferências', function () {
    it('Deveria buscar todas as transferências com SUCESSO', async function () {
      // Arrange
      
      sinon.stub(Model, 'find').resolves(outputArray);
  
      // Act
      const service = new TransferService();
      const result = await service.getAllTransfers();
  
      // Assert
      expect(result).to.be.deep.equal(outputArray);
  
      sinon.restore();
    });
  });
  describe('Deveria buscar uma transferência por key', function () {
    it('Deveria retornar a lista por key', async function () {
      // Arrange
      const paymentOutput: Payment = new Payment(
        'Vinicius',
        'Ricardo',
        50,
        '187.401.600-33',
        '63319d80feb9f483ee823ac5',
        PaymentStatus.concluded,
      );
      sinon.stub(Model, 'find').resolves([paymentOutput]);
  
      // Act
      const service = new TransferService();
      const result = await service.getByKey('187.401.600-33');
  
      // Assert
      expect(result).to.be.deep.equal([paymentOutput]);
  
      sinon.restore();
    });  
  });

  describe('Lançando exceção ao tentar alterar um TRIX', function () {
    it('Deveria lançar uma exceção quando a key é inválida', async function () {
      const paymentInput: IPayment = {
        payByPerson: 'Pedrão',
        payToPerson: 'Juju',
        amount: 5000,
        key: '858.898.670-16XX',
      };
      sinon.stub(Model, 'update').resolves();
      sinon.stub(Model, 'findOne').resolves(false);
      
      try {
        const service = new TransferService();
        await service.undoTransfer('63320b77aa12f0db4f210b00', paymentInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Key not found');
      }
    });
  
    it('Deveria lançar uma exceção quando o id é inválido', async function () {
      const paymentInput: IPayment = {
        payByPerson: 'Pedrão',
        payToPerson: 'Juju',
        amount: 5000,
        key: cpf,
      };
      const outputKey: Key = new Key(
        cpf,
        'Juju',
        'cpf',
        '633ec9fa3df977e30e993492',
      );
      sinon.stub(Model, 'update').resolves();
      sinon.stub(Model, 'findOne').resolves(outputKey);
      
      try {
        const service = new TransferService();
        await service.undoTransfer('WRONG ID', paymentInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid Mongo id');
      }
    });
  
    afterEach(function () {
      sinon.restore();
    });
  });
});
