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
