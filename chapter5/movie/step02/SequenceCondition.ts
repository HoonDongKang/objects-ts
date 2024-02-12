import { Screening } from './Screening';
export class SequenceCondition {
  constructor(private sequence: number){
    this.sequence;
  }

  isSatisfiedBy(screening: Screening){
    return this.sequence === screening.getSequence();
  }
}