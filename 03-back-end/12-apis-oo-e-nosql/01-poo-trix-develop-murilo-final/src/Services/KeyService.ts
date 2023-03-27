// src/Services/KeyService.ts

import Key from '../Domain/Key/Key';
import KeyFactory from '../Domain/Key/KeyFactory';
import IKey from '../Interfaces/IKey';
import KeyODM from '../Models/KeyODM';

class KeyService {
  private createKeyDomain(key: IKey | null): Key | null {
    if (key) {
      return new Key(
        key.value,
        key.owner,
        key.type,
        key.id,
      );
    }
    return null;
  }

  public async register(data: IKey) {
    const typedKey = KeyFactory.create(data);
    const keyODM = new KeyODM();
    const newkey = await keyODM.create(typedKey);
    return this.createKeyDomain(newkey);
  }

  public async getByValue(value: string) {
    const keyODM = new KeyODM();
    const key = await keyODM.findByValue(value);
    return this.createKeyDomain(key);
  }

  public async getByOwner(owner: string) {
    const keyODM = new KeyODM();
    const keys = await keyODM.findByOwner(owner);
    const keySet = keys.map((key) => this.createKeyDomain(key));
    return keySet;
  }
}

export default KeyService;