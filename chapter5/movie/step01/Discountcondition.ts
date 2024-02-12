import { DiscountConditionType } from "./DiscountConditionType";
import { Screening } from "./Screening";

export class DiscountCondition {
  private type: DiscountConditionType;

  private sequence: number;

  private dayOfWeek: number;
  private startTime: Date;
  private endTime: Date;

  isSatisfiedBy(screening: Screening){
    if(this.type === DiscountConditionType.PERIOD){
      return this.isSatisfiedByPeriod(screening);
    }
    
    return this.isSatisfiedBySequence(screening);
  }

  private isSatisfiedByPeriod(screening: Screening) {
    return this.dayOfWeek === screening.getWhenScreened().getTime() &&
      this.startTime.getTime() <= screening.getWhenScreened().getTime() &&
      this.endTime.getTime() >= screening.getWhenScreened().getTime()
  }

  private isSatisfiedBySequence(screening: Screening) {
    return this.sequence === screening.getSequence();
  }
}