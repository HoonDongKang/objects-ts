import { Money } from "./money/Money";

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

class NightlyDiscountPhone{
  private static LATE_NGHT_HOUR = 22;
  private calls: Call[] = [];

  constructor(private nightlyAmount: Money, private regularAmount: Money, private seconds: number){
    this.nightlyAmount;
    this.regularAmount;
    this.seconds;
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

    return result;
  }
}

const phone: NightlyDiscountPhone = new NightlyDiscountPhone(Money.wons(5),Money.wons(2), 10);
phone.call(new Call(new Date("2024-02-12 21:59:40"),new Date("2024-02-12 22:00:00")));
phone.call(new Call(new Date("2024-02-12 22:00:40"),new Date("2024-02-12 22:01:00")));

//10초당 5원
//20초 -> 10 // 20초 -> 4
//14원
console.log(phone.calculateFee())