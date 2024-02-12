import { Money } from '../../../money/Money'
import { DiscountCondition } from '../DiscountCondition'
import { DiscountPolicy } from '../DiscountPolicy'
import { Screening } from '../Screening'

export class AmountDiscountPolicy extends DiscountPolicy {
  constructor(private discountAmount: Money, conditions: DiscountCondition[]) {
    super(conditions)
    this.discountAmount
  }

  protected getDiscountAmount(screening: Screening): Money {
    return this.discountAmount
  }
}
