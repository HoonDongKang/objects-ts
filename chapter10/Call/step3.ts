import { Money } from "../money/Money";

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

class Phone{
  private calls: Call[] = [];
  constructor(private amount: Money, private seconds: number, private taxRate: number){
    this.amount;
    this.seconds;
    this.taxRate;
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
    });

    return result.plus(result.times(this.taxRate));
  }
}

class NightlyDiscountPhone{
  private static LATE_NGHT_HOUR = 22;
  private calls: Call[] = [];

  constructor(private nightlyAmount: Money, private regularAmount: Money, private seconds: number, private taxRate: number){
    this.nightlyAmount;
    this.regularAmount;
    this.seconds;
    this.taxRate;
  }

  call(call: Call){
    this.calls.push(call);
  }

  calculateFee(): Money{
    let result: Money = Money.ZERO;

    this.calls.forEach((call)=> {
      if(call.getFrom().getHours() >= NightlyDiscountPhone.LATE_NGHT_HOUR){
        result = result.plus(this.nightlyAmount.times(call.getDuration() / this.seconds))
      } else {
        result = result.plus(this.regularAmount.times(call.getDuration() / this.seconds))
      }
    })

    return result.minus(result.times(this.taxRate));
  }
}

const phone: NightlyDiscountPhone = new NightlyDiscountPhone(Money.wons(5),Money.wons(2), 10, 0.1);
phone.call(new Call(new Date("2024-02-12 21:59:40"),new Date("2024-02-12 22:00:00")));
phone.call(new Call(new Date("2024-02-12 22:00:40"),new Date("2024-02-12 22:01:00")));

// 세금 계사 로직의 중복
console.log(phone.calculateFee())