import { Money } from "../money/Money";
import { Call } from "./Call";

interface RatePolicy {
  calculateFee(phone: Phone): Money;
}

abstract class BasicRatePolicy implements RatePolicy {
  calculateFee(phone: Phone): Money {
    let result: Money = Money.ZERO;
    phone.getCalls().forEach((call) => {
      result = result.plus(this.calculateCallFee(call))
    })
    return result;
  }

  protected abstract calculateCallFee(call: Call): Money;
}

class RegularPolicy extends BasicRatePolicy {
  constructor(private amount: Money, private seconds: number){
    super();
    this.amount;
    this.seconds;
  }

  protected calculateCallFee(call: Call): Money {
    return this.amount.times(call.getDuration() / this.seconds);
  }
}

class NightlyDiscountPolicy extends BasicRatePolicy {
  constructor(private nightlyAmount: Money, private regularAmount: Money, private seconds: number){
    super();
    this.nightlyAmount;
    this.regularAmount;
    this.seconds;
  }

  protected calculateCallFee(call: Call): Money {
    if(call.getFrom().getHours() >= 22){
      return this.nightlyAmount.times(call.getDuration() / this.seconds);
    } else {
      return this.regularAmount.times(call.getDuration() / this.seconds);
    }
  }
}

class Phone {
  private calls: Call[] = [];
  private ratePolicy: RatePolicy;

  constructor(ratePolicy: RatePolicy){
    this.ratePolicy = ratePolicy;
  }

  getCalls(){
    return this.calls;
  }

  call(call: Call){
    this.calls.push(call);
  }

  calculateFee(){
    return this.ratePolicy.calculateFee(this);
  }
}

const phone: Phone = new Phone(new RegularPolicy(Money.wons(10), 10));
const phone2: Phone = new Phone(new NightlyDiscountPolicy(Money.wons(5),Money.wons(10), 10));

phone.call(new Call(new Date("2024-02-12 21:00:00"),new Date("2024-02-12 21:00:30")));
phone2.call(new Call(new Date("2024-02-12 22:00:00"),new Date("2024-02-12 22:00:30")));


console.log(phone.calculateFee());
console.log(phone2.calculateFee());
