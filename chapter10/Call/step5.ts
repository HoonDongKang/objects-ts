import { Money } from "./money/Money";
import { Call } from "./step3";

abstract class AbstractPhone{
  protected calls: Call[] = [];

  calculateFee(): Money {
    let result: Money = Money.ZERO;
    this.calls.forEach((call)=>{
      result = result.plus(this.calculateCallFee(call))
    })
    return result;
  }

  protected abstract calculateCallFee(call: Call): Money;
}

class Phone extends AbstractPhone {
  constructor(private amount: Money, private seconds: number){
    super();
    this.amount;
    this.seconds;
  }

  call(call: Call){
    this.calls.push(call);
  }

  protected calculateCallFee(call: Call): Money {
    return this.amount.times(call.getDuration() / this.seconds)
  }
}

class NightlyDiscountPhone extends AbstractPhone {
  private static LATE_NGHT_HOUR = 22;
  constructor(private nightlyAmount: Money, private regularAmount: Money, private seconds: number){
    super();
    this.nightlyAmount;
    this.regularAmount;
    this.seconds;
  }

  call(call: Call){
    this.calls.push(call);
  }

  protected calculateCallFee(call: Call): Money {
    if(call.getFrom().getHours() >= NightlyDiscountPhone.LATE_NGHT_HOUR){
      return this.nightlyAmount.times(call.getDuration() / this.seconds)
    } else {
      return this.regularAmount.times(call.getDuration() / this.seconds)
    }
  }
}

const phone1: Phone = new Phone(Money.wons(5), 10);
phone1.call(new Call(new Date("2024-02-12 21:59:40"),new Date("2024-02-12 22:00:00")));
phone1.call(new Call(new Date("2024-02-12 22:00:40"),new Date("2024-02-12 22:01:00")));

const phone2: NightlyDiscountPhone = new NightlyDiscountPhone(Money.wons(5),Money.wons(2), 10);
phone2.call(new Call(new Date("2024-02-12 21:59:40"),new Date("2024-02-12 22:00:00")));
phone2.call(new Call(new Date("2024-02-12 22:00:40"),new Date("2024-02-12 22:01:00")));

//10초당 5원
//20초 -> 10 // 20초 -> 4
//14원
console.log(phone1.calculateFee())
console.log(phone2.calculateFee())