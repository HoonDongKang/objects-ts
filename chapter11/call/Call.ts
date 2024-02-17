export class Call {
  constructor(private from: Date, private to: Date){
    this.from;
    this.to;
  }

  getDuration(): number{
    return this.to.getTime()/1000 - this.from.getTime()/1000;
  }
  
  getFrom(): Date{
    return this.from
  }
}