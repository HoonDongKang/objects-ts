import { Money } from '../../../money/Money'
import { DiscountCondition } from '../DiscountCondition'
import { DiscountPolicy } from '../DiscountPolicy'
import { Screening } from '../Screening'

export class PercentDiscountPolicy extends DiscountPolicy {
  constructor(private percent: number, conditions: DiscountCondition[]) {
    super(conditions)
    this.percent
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent)
  }
}
