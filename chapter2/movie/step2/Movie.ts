import { Money } from '../../money/Money'
import { DiscountPolicy } from './DiscountPolicy'
import { Screening } from './Screening'

export class Movie {
  constructor(
    private title: string,
    private runningTime: number,
    private fee: Money,
    private discountPolicy: DiscountPolicy
  ) {
    this.title
    this.discountPolicy
    this.runningTime
    this.fee
  }

  getFee(): Money {
    return this.fee
  }

  calculateMovieFee(screening: Screening): Money {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    )
  }

  changeDiscountPolicy(discountPolicy: DiscountPolicy){
    this.discountPolicy = discountPolicy;
  }
}
