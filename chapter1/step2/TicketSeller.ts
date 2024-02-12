import { TicketOffice } from './TicketOffice';
import { Audience } from './Audience';

export class TicketSeller {
  constructor(private ticketOffice: TicketOffice) {
    this.ticketOffice;
  }

  getTicketOffice(): TicketOffice {
    return this.ticketOffice;
  }

  sellTo(audience: Audience) {
    this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket()));
  }
}
