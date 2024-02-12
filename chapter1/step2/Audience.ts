import { Bag } from './Bag';
import { Ticket } from './Ticket';

export class Audience {
  constructor(private bag: Bag) {
    this.bag;
  }

  buy(ticket: Ticket): number {
    if (this.bag.hasInvitation()) {
      console.log('======== 초대권으로 티켓 구매 ========');
      console.log('티켓 구매 성공');
      this.bag.setTicket(ticket);
      return 0;
    } else {
      console.log('======== 현금으로 티켓 구매 ========');
      console.log('티켓 구매 성공');
      this.bag.setTicket(ticket);

      console.log('현금 지불');
      this.bag.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }
}
