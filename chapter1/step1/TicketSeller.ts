import { TicketOffice } from './TicketOffice';

export class TicketSeller {
  constructor(private ticketOffice: TicketOffice) {
    this.ticketOffice;
  }

  getTicketOffice(): TicketOffice {
    return this.ticketOffice;
  }
}
