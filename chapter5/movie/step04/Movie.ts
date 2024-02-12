import { Money } from "../../money/Money";
import { Discountcondition } from "./DiscountCondition";
import { TMovieType } from "./MovieType";
import { PeriodCondition } from "./PeriodCondition";
import { Screening } from "./Screening";
import { SequenceCondition } from "./SequenceCondition";

export abstract class Movie {
  constructor( 
    private title: string,
    private runningTime: number,
    private fee: Money,
    private discountConditions: Discountcondition[]){
      this.title;
      this.runningTime;
      this.fee;
      this.discountConditions = [...discountConditions];
    }

  calculateMovieFee(screening: Screening): Money{
    if(this.isDiscountable(screening)){
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return this.discountConditions.some((condition)=> condition.isSatisfiedBy(screening));
  }
  protected getFee(): Money{
    return this.fee;
  }
  protected abstract calculateDiscountAmount(): Money
}