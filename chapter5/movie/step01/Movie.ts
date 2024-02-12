import { Money } from "../../money/Money";
import { TMovieType } from "./MovieType";
import { Screening } from "./Screening";
import { DiscountCondition } from "./discountCondition";

export class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountConditons: DiscountCondition[];

  private movieType: TMovieType;
  private discountAmount: Money;
  private discountPercent: number;

  calculateMovieFee(screening: Screening): Money{
    if(this.isDiscountable(screening)){
      return this.fee.minus(this.calculateDiscountAmount());
    }

    return this.fee;
  }

  private isDiscountable(screening: Screening): boolean {
    return this.discountConditons.some((condition)=> condition.isSatisfiedBy(screening));
  }
  private calculateDiscountAmount = (): Money | never => {
    switch (this.movieType) {
      case "AMOUNT_DISCOUNT":
        return this.calculateAmountDiscountAmount();
      case "PERCENT_DISCOUNT":
        return this.calculatePercentDiscountAmount();
      case "NONE_DISCOUNT":
        return this.calculateNoneDiscountAmount();
      default:
       throw new Error("ERROR");
      }

  };

  private calculateAmountDiscountAmount = (): Money => {
    return this.discountAmount;
  };

  private calculatePercentDiscountAmount = (): Money => {
    return this.fee.times(this.discountPercent);
  };

  private calculateNoneDiscountAmount = (): Money => {
    return Money.ZERO;
  };

}