// src/Models/PaymentODM.ts

import { Schema } from 'mongoose';
import IPayment from '../Interfaces/IPayment';
import AbstractODM from './AbstractODM';

class PaymentODM extends AbstractODM<IPayment> {
  // private schema: Schema; // Atributo para o "molde"
  // private model: Model<IPayment>; // Atributo para criar coleção e fornecer acesso ao banco

  constructor() {
    const schema = new Schema<IPayment>({
      payByPerson: { type: String, required: true },
      payToPerson: { type: String, required: true },
      amount: { type: Number, required: true },
      key: { type: String, required: true },
    });
    super(schema, 'Payment');
    // this.model = models.Payment || model('Payment', this.schema); // Antes de criar o Schema, verificar se o schema já existe. Caso não exista, o schema será criado. 
  }

  // public async create(payment: IPayment): Promise<IPayment> {
  //   return this.model.create({ ...payment });
  // }

  public async findAll(): Promise<IPayment[]> {
    return this.model.find();
  }

  public async findByKey(key: string): Promise<IPayment[]> {
    return this.model.find({ key });
  }
}

export default PaymentODM;