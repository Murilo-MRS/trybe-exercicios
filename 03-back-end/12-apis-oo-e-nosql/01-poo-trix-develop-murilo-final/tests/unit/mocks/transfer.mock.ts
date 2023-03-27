import Payment from '../../../src/Domain/Payment/Payment';
import PaymentStatus from '../../../src/utils/PaymentStatus';

export const inputArray = [
  {
    payByPerson: 'José',
    payToPerson: 'Fernanda',
    amount: 500,
    key: '329.310.890-36',
    status: PaymentStatus.concluded,
    id: '63320b77aa12f0db4f210afe',
  },
  {
    payByPerson: 'Maria',
    payToPerson: 'Juan',
    amount: 500,
    key: '478.966.190-32',
    status: PaymentStatus.concluded,
    id: '63320b77aa12f0db4f210b00',
  },
];

export const outputArray = inputArray.map((item) => new Payment(
  item.payByPerson,
  item.payToPerson,
  item.amount,
  item.key,
  item.id,
  item.status,
));
