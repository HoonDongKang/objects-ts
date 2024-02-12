import { Invitation } from './Invitation';
import { Ticket } from './Ticket';

export class Bag {
  private ticket: Ticket | null = null;

  constructor(
    private amount: number,
    private invitation?: Invitation | null,
  ) {
    this.amount;
    this.invitation = invitation ? invitation : null;
  }

  hasInvitation(): boolean {
    return this.invitation !== null;
  }

  hasTicket(): boolean {
    return this.ticket !== null;
  }

  hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      console.log('======== 초대권으로 티켓 구매 ========');
      console.log('티켓 구매 성공');
      this.setTicket(ticket);
      return 0;
    } else {
      console.log('======== 현금으로 티켓 구매 ========');
      console.log('티켓 구매 성공');
      this.setTicket(ticket);

      console.log('현금 지불');
      this.minusAmount(ticket.getFee());
      return ticket.getFee();
    }
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
    console.log(`손님 현재 잔액: ${this.amount}`);
  }

  plusAmount(amount: number) {
    this.amount += amount;
    console.log(`손님 현재 잔액: ${this.amount}`);
  }
}
