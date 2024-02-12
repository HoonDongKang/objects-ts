import { TicketSeller } from './TicketSeller';
import { Audience } from './Audience';
import { Ticket } from './Ticket';

export class Theater {
  constructor(private ticketSeller: TicketSeller) {
    this.ticketSeller;
  }

  enter(audience: Audience) {
    let ticket: Ticket;

    if (audience.getBag().hasInvitation()) {
      console.log('======== 초대권으로 티켓 구매 ========');

      ticket = this.ticketSeller.getTicketOffice().getTicket();

      console.log('티켓 구매 성공');
      audience.getBag().setTicket(ticket);
    } else {
      console.log('======== 현금으로 티켓 구매 ========');
      ticket = this.ticketSeller.getTicketOffice().getTicket();
      console.log('티켓 구매 성공');

      console.log('현금 지불');
      audience.getBag().minusAmount(ticket.getFee());

      console.log('현금 계산');
      this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());

      console.log('티켓 구매 성공');
      audience.getBag().setTicket(ticket);
    }
  }
}
