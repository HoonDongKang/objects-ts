import { Money } from '../../../money/Money'
import { DiscountCondition } from '../DiscountCondition'
import { DefaultDiscountPolicy } from '../DiscountPolicy'
import { Screening } from '../Screening'

export class PercentDiscountPolicy extends DefaultDiscountPolicy {
  constructor(private percent: number, conditions: DiscountCondition[]) {
    super(conditions)
    this.percent
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent)
  }
}
