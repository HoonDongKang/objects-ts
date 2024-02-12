import { TicketSeller } from './TicketSeller';
import { Audience } from './Audience';

export class Theater {
  constructor(private ticketSeller: TicketSeller) {
    this.ticketSeller;
  }

  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}
