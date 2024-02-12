import { Money } from "../../money/Money";
import { DiscountConditionType } from "./DiscountConditionType";
import { MovieType } from "./MovieType";
import { DiscountCondition } from "./discountCondition";

export class Movie {

  constructor(
    private title: string,
    private runningTime: number,
    private fee: Money,
    private discountConditons: DiscountCondition[],
  
    private movieType: MovieType,
    private discountAmount: Money,
    private discoutPercent: number){
      this.title,
      this.runningTime,
      this.fee,
      this.discountConditons,
      this.movieType,
      this.discountAmount,
      this.discoutPercent
    }

  getMovieType(): MovieType{
    return this.movieType;
  }

  calculateAmountDiscountedFee(): Money {
    if (this.movieType !== MovieType.AMOUNT_DISCOUNT){
      throw new Error("type error");
    }
    return this.fee.minus(this.discountAmount);
  }

  calculatePercentDiscountedFee(): Money {
    if (this.movieType !== MovieType.PERCENT_DISCOUNT){
      throw new Error("type error");
    }
    return this.fee.minus(this.fee.times(this.discoutPercent));
  }

  calculateNoneDiscountedFee(): Money {
    if (this.movieType !== MovieType.NONE_PERCENT){
      throw new Error("type error");
    }
    return this.fee;
  }

  isDiscountable(whenScreened: Date, sequence: number): boolean {
    this.discountConditons.forEach((condition)=>{
      if(condition.getType() === DiscountConditionType.PERIOD){
        if (condition.isDiscountablePeriod(whenScreened.getDay(), whenScreened)){
          return true;
        }
      }else {
        if(condition.isDiscountableSequence(sequence)){
          return true;
        }
      }
    })
    return false;
  }

  setMovieType(movieType: MovieType){
    this.movieType = movieType;
  }

  getFee(): Money{
    return this.fee;
  }

  setFee(fee: Money) {
    this.fee = fee;
  }

  getDiscountConditions():DiscountCondition[] {
    return this.discountConditons;
  }

  setDiscountConditions(discountConditions: DiscountCondition[]) {
    this.discountConditons = [...discountConditions];
  }

  getDiscountAmount(): Money{
    return this.discountAmount;
  }

  setDiscountAmount(discountAmount: Money) {
    this.discountAmount = discountAmount;
  }

  getDiscountPercent(): number {
    return this.discoutPercent;
  }

  setDiscountPercent(discountPercent: number) {
    this.discoutPercent= discountPercent;
  }


}