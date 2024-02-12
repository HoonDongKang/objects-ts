import { Discountcondition } from './DiscountCondition';
import { Screening } from './Screening';
export class SequenceCondition implements Discountcondition {
  constructor(private sequence: number){
    this.sequence;
  }

  isSatisfiedBy(screening: Screening){
    return this.sequence === screening.getSequence();
  }
}