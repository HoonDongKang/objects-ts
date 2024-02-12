import { DiscountCondition } from '../DiscountCondition'
import { Screening } from '../Screening'

const DAY = ['일', '월', '화', '수', '목', '금', '토']

export class PeriodCondition implements DiscountCondition {
  constructor(
    private dayOfWeek: string,
    private startTime: Date,
    private endTime: Date
  ) {
    this.dayOfWeek
    this.startTime
    this.endTime
  }

  isSatisfiedBy(screening: Screening): boolean {
    return (
      DAY[screening.getStartTime().getDay()] === this.dayOfWeek &&
      this.startTime.getTime() <= screening.getStartTime().getTime() &&
      this.endTime.getTime() >= screening.getStartTime().getTime()
    )
  }
}
