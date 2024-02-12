import { Ticket } from './Ticket';
import { Audience } from './Audience';

export class TicketOffice {
  constructor(
    private amount: number,
    private tickets: Ticket[],
  ) {
    this.amount;
    this.tickets = [...tickets];
  }

  sellTicketTo(audience: Audience) {
    this.plusAmount(audience.buy(this.getTicket()));
  }

  getTicket(): Ticket {
    if (this.tickets.length === 0)
      throw new Error('티켓이 더이상 존재하지 않습니다.');
    return this.tickets.shift()!;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
    console.log(`티켓 판매소 현재 잔액: ${this.amount}`);
  }

  plusAmount(amount: number) {
    this.amount += amount;
    console.log(`티켓 판매소 현재 잔액: ${this.amount}`);
  }
}
