// src/Domain/Key/KeyFactory.ts
import IKey from '../../Interfaces/IKey';
import KeyTypes from '../../utils/KeyTypes';
import CPF from './CPF';
import PhoneNumber from './PhoneNumber';
import IValid from '../../Interfaces/IValid';
import Mail from './Mail';
import Random from './Random';

class KeyFactory {
  public static create(key: IKey): IKey & IValid {
    if (key.type === KeyTypes.CPF) {
      return new CPF(key.value, key.owner);
    }
    if (key.type === KeyTypes.PHONE_NUMBER) {
      return new PhoneNumber(key.value, key.owner);
    }
    if (key.type === KeyTypes.MAIL) {
      return new Mail(key.value, key.owner);
    }
    if (key.type === KeyTypes.RANDOM) {
      return new Random(key.value, key.owner);
    }
    throw new Error('Invalid Key Type!');
  }
}

export default KeyFactory;