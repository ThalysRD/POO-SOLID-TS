import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static counter = 0;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    this._energyType = 'mana';
    Necromancer.counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.counter;
  }
}

export default Necromancer;