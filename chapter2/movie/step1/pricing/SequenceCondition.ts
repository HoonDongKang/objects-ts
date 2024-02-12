import { DiscountCondition } from '../DiscountCondition'
import { Screening } from '../Screening'

export class SequenceCondition implements DiscountCondition {
  constructor(private sequence: number) {
    this.sequence
  }

  isSatisfiedBy(screening: Screening): boolean {
    return screening.isSequence(this.sequence)
  }
}
