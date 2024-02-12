import { Money } from "../../money/Money";
import { Discountcondition } from "./DiscountCondition";
import { Movie } from "./Movie";

export class AmountDiscountMovie extends Movie{
  constructor( 
     title: string,
     runningTime: number,
     fee: Money,
     discountConditions: Discountcondition[],
     private discountAmount: Money){
      super(title, runningTime, fee, discountConditions);
      this.discountAmount;
    }

    protected calculateDiscountAmount(): Money {
      return this.discountAmount;    
    }
}