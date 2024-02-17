import { Money } from "../money/Money";
import { Call } from "./step3";

class Phone {
  private calls: Call[] = [];
  constructor(private amount: Money, private seconds: number){
    this.amount;
    this.seconds;
  }

  calculateFee(): Money {
    let result: Money = Money.ZERO;
    this.calls.forEach((call)=>{
      result = result.plus(this.calculateCallFee(call))
    })
    return result;
  }

  private calculateCallFee(call: Call): Money {
    return this.amount.times(call.getDuration() / this.seconds)
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
        result = result.plus(this.calculateCallFee(call))
    })

    return result.minus(result.times(this.taxRate));
  }

  private calculateCallFee(call: Call): Money {
    if(call.getFrom().getHours() >= NightlyDiscountPhone.LATE_NGHT_HOUR){
      return this.nightlyAmount.times(call.getDuration() / this.seconds)
    } else {
      return this.regularAmount.times(call.getDuration() / this.seconds)
    }
  }
}

const phone: NightlyDiscountPhone = new NightlyDiscountPhone(Money.wons(5),Money.wons(2), 10, 0.1);
phone.call(new Call(new Date("2024-02-12 21:59:40"),new Date("2024-02-12 22:00:00")));
phone.call(new Call(new Date("2024-02-12 22:00:40"),new Date("2024-02-12 22:01:00")));

//10초당 5원
//20초 -> 10 // 20초 -> 4
//14원
console.log(phone.calculateFee())