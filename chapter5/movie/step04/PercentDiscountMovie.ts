import { Money } from "../../money/Money";
import { Discountcondition } from "./DiscountCondition";
import { Movie } from "./Movie";

export class PercentDiscountMovie extends Movie{
  constructor( 
     title: string,
     runningTime: number,
     fee: Money,
     discountConditions: Discountcondition[],
     private percent: number){
      super(title, runningTime, fee, discountConditions);
      this.percent;
    }

    protected calculateDiscountAmount(): Money {
      return this.getFee().times(this.percent);
    }
}