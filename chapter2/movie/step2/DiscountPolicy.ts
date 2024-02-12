import { Money } from "../../money/Money";
import { DiscountCondition } from "./DiscountCondition";
import { Screening } from "./Screening";

export interface DiscountPolicy {
  calculateDiscountAmount(screening: Screening): Money;
}

export abstract class DefaultDiscountPolicy implements DiscountPolicy {
  constructor(public conditions: DiscountCondition[]) {
    this.conditions = [...conditions];
  }

  calculateDiscountAmount(screening: Screening): Money {
    this.conditions.map((condition) => {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    });
    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
