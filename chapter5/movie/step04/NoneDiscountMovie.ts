import { Money } from "../../money/Money";
import { Discountcondition } from "./DiscountCondition";
import { Movie } from "./Movie";

export class NoneDiscountMovie extends Movie{
  constructor( 
     title: string,
     runningTime: number,
     fee: Money,
     discountConditions: Discountcondition[]){
      super(title, runningTime, fee, discountConditions);
    }

    protected calculateDiscountAmount(): Money {
      return Money.ZERO;    
    }
}