import { Money } from "../money/Money";
import { Call } from "./Call";

abstract class Phone {
  private calls: Call[] = [];

  call(call: Call){
    this.calls.push(call);
  }
  calculateFee(){
    let result: Money = Money.ZERO;
    this.calls.forEach((call)=>{
      result = result.plus(this.calculateCallFee(call))
    })
    return result;
  }

  protected abstract calculateCallFee(call: Call): Money;
}

class RegularPhone extends Phone {
  constructor(private amount: Money, private seconds: number){
    super();
    this.amount;
    this.seconds;
  }

  protected calculateCallFee(call: Call): Money {
    return this.amount.times(call.getDuration() / this.seconds)
  }
}

class NightlyDiscountPhone extends Phone {
  private static LATE_NGHT_HOUR = 22;
  constructor(private nightlyAmount: Money, private regularAmount: Money, private seconds: number){
    super();
    this.nightlyAmount;
    this.regularAmount;
    this.seconds;
  }

  protected calculateCallFee(call: Call): Money {
    if(call.getFrom().getHours() >= NightlyDiscountPhone.LATE_NGHT_HOUR){
      return this.nightlyAmount.times(call.getDuration() / this.seconds)
    } else {
      return this.regularAmount.times(call.getDuration() / this.seconds)
    }
  }
}

class TaxableRegularPhone extends RegularPhone {
  constructor(amount: Money, seconds: number, private taxRate: number){
    super(amount, seconds);
    this.taxRate;
  }

  protected calculateCallFee(call: Call): Money {
    // super => 결합도가 높아짐
    const fee = super.calculateCallFee(call);
    return fee.plus(fee.times(this.taxRate))
  }
}

const phone: Phone = new TaxableRegularPhone(Money.wons(5), 10, 0.1);
//30초 -> 15  세금 1.5
phone.call(new Call(new Date("2024-02-12 21:00:00"),new Date("2024-02-12 21:00:30")));

// 15 + 1.5 = 16.5
console.log(phone.calculateFee());
