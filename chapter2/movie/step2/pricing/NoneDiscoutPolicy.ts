import { DiscountPolicy } from "../DiscountPolicy";
import { Screening } from "../Screening";
import { Money } from "./../../../money/Money";

export class NoneDiscountPolicy implements DiscountPolicy {
  calculateDiscountAmount(screening: Screening): Money {
    return Money.ZERO;
  }
}
