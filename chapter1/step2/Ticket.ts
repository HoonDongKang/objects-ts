export class Ticket {
  constructor(private fee: number) {
    this.fee;
  }

  public getFee(): number {
    return this.fee;
  }
}
