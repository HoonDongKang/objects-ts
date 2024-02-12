import { Bag } from './Bag';

export class Audience {
  constructor(private bag: Bag) {
    this.bag;
  }

  getBag(): Bag {
    return this.bag;
  }
}
