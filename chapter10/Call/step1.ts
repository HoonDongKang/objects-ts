import { Money } from "../money/Money";

class Call {
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

class Phone{
  private calls: Call[] = [];
  constructor(private amount: Money, private seconds: number){
    this.amount;
    this.seconds;
  }

  call(call: Call){
    this.calls.push(call);
  }

  getCalls(): Call[]{
    return this.calls
  }

  getAmount(): Money{
    return this.amount;
  }

  getSeconds(): number{
    return this.seconds;
  }

  calculateFee(): Money{
    let result: Money = Money.ZERO;
    
    this.calls.forEach((call)=> {
      result = result.plus(this.amount.times(call.getDuration() / this.seconds))
      console.log(result)
    });

    return result;
  }
}

const phone: Phone = new Phone(Money.wons(5), 10);
phone.call(new Call(new Date("2024-02-12 21:00:00"),new Date("2024-02-12 21:00:30")));
phone.call(new Call(new Date("2024-02-12 21:00:40"),new Date("2024-02-12 21:01:00")));

//10초당 5원
//30초 -> 15 // 20초 -> 10
//25원
console.log(phone.calculateFee())