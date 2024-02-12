import { Bag } from './Bag';
import { Ticket } from './Ticket';

export class Audience {
  constructor(private bag: Bag) {
    this.bag;
  }

  buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}
