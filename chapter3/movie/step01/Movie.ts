import { Money } from "../../money/Money";
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