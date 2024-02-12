import { Screening } from './Screening';
export class PeriodCondition {
  constructor(
    private dayOfWeek: number,
    private startTime:Date,
    private endTime:Date){

    this.dayOfWeek;
    this.startTime;
    this.endTime;
  }

  isSatisfiedBy(screening: Screening){
    return this.dayOfWeek === screening.getWhenScreened().getTime() &&
    this.startTime.getTime() <= screening.getWhenScreened().getTime() &&
    this.endTime.getTime() >= screening.getWhenScreened().getTime()
  }
}