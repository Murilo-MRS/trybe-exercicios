// src/Services/TransferService.ts

import Payment from '../Domain/Payment/Payment';
import IPayment from '../Interfaces/IPayment';
import PaymentODM from '../Models/PaymentODM';
import KeyService from './KeyService';

class TransferService {
  private isValidKey(key: string): boolean {
    const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    return cpfRegex.test(key);
  }

  private createPaymentDomain(payment: IPayment | null): Payment | null {
    if (payment) {
      return new Payment(
        payment.payByPerson,
        payment.payToPerson,
        payment.amount,
        payment.key,
        payment.id,
        payment.status,
      );
    }
    return null;
  }

  public async transfer(payment: IPayment) {
    const keyService = new KeyService();
    if (await keyService.getByValue(payment.key)) {
      const paymentODM = new PaymentODM();
      const newPayment = await paymentODM.create(payment);
      return this.createPaymentDomain(newPayment);
    }
    throw new Error('Key not found');
  }

  public async getAllTransfers() {
    const paymentODM = new PaymentODM();
    
    const allTransfers = await paymentODM.findAll();
    
    const transfersArray = allTransfers.map((transfer) =>
      this.createPaymentDomain(transfer));
    
    return transfersArray;
  }

  public async getByKey(key: string) {
    const paymentODM = new PaymentODM();
    
    const allTransfers = await paymentODM.findByKey(key);

    const transfersArray = allTransfers.map((transfer) =>
      this.createPaymentDomain(transfer));
    
    return transfersArray;
  }

  public async undoTransfer(id: string, payment: IPayment) {
    const keyService = new KeyService();
    if (await keyService.getByValue(payment.key)) {
      const paymentODM = new PaymentODM();
      return paymentODM.update(id, payment);
    }
    throw new Error('Key not found');
  }
}

export default TransferService;
