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

    return this.afterCalculated(result);
  }

  protected abstract calculateCallFee(call: Call): Money;
  protected abstract afterCalculated(fee: Money): Money;
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

  protected afterCalculated(fee: Money): Money {
    return fee;
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

  protected afterCalculated(fee: Money): Money {
    return fee;
  }
}

class TaxableRegularPhone extends RegularPhone {
  constructor(amount: Money, seconds: number, private taxRate: number){
    super(amount, seconds);
    this.taxRate;
  }

  protected afterCalculated(fee: Money): Money {
    return fee.plus(fee.times(this.taxRate));
  }
}

class TaxableNightlyDiscountPhone extends NightlyDiscountPhone {
  constructor(nightlyAmount: Money, regularAmount: Money, seconds: number, private taxRate: number){
    super(nightlyAmount, regularAmount, seconds);
    this.taxRate;
  }

  protected afterCalculated(fee: Money): Money {
    return fee.plus(fee.times(this.taxRate));
  }
}

class RateDiscountableRegularPhone extends RegularPhone {
  constructor(amount: Money, seconds: number, private discountAmount: Money){
    super(amount, seconds);
    this.discountAmount;
  }

  protected afterCalculated(fee: Money): Money {
    return fee.minus(this.discountAmount);
  }
}

class RateDiscountableNightlyDiscountPhone extends NightlyDiscountPhone {
  constructor(nightlyAmount: Money, regularAmount: Money, seconds: number, private discountAmount: Money){
    super(nightlyAmount, regularAmount, seconds);
    this.discountAmount;
  }

  protected afterCalculated(fee: Money): Money {
    return fee.minus(this.discountAmount);
  }
}

const phone: Phone = new TaxableRegularPhone(Money.wons(5), 10, 0.1);
const phone2: Phone = new TaxableNightlyDiscountPhone(Money.wons(2), Money.wons(5), 10, 0.1);
const phone3: Phone = new RateDiscountableRegularPhone(Money.wons(5), 10, Money.wons(1));
const phone4: Phone = new RateDiscountableNightlyDiscountPhone(Money.wons(2), Money.wons(5), 10, Money.wons(1));
//30초 -> 15  세금 1.5
// 15 + 1.5 = 16.5
phone.call(new Call(new Date("2024-02-12 21:00:00"),new Date("2024-02-12 21:00:30")));
phone3.call(new Call(new Date("2024-02-12 21:00:00"),new Date("2024-02-12 21:00:30")));

//야간 30초 - 6 
// 6 + 0.6 = 6.6
// 6 + 0.6 = 6.6
phone2.call(new Call(new Date("2024-02-12 22:00:00"),new Date("2024-02-12 22:00:30")));
phone2.call(new Call(new Date("2024-02-12 22:00:00"),new Date("2024-02-12 22:00:30")));

console.log(phone.calculateFee());
console.log(phone2.calculateFee());
console.log(phone3.calculateFee());
console.log(phone4.calculateFee());
