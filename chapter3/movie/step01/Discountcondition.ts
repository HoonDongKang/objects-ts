import { DiscountConditionType } from "./DiscountConditionType";

export class DiscountCondition {
  constructor(
    private type: DiscountConditionType,

    private sequence: number,
  
    private dayOfWeek: number,
    private startTime: Date,
    private endTime: Date,
  ) {
    this.type;
    this.sequence;
    this.dayOfWeek;
    this.startTime;
    this.endTime
  }

  getType(): DiscountConditionType{
    return this.type;
  }

  setType(type: DiscountConditionType){
    this.type = type;
  } 

  getDayOfWeek(): number{
    return this.dayOfWeek;
  }
  setDayOfWeek(dayOfWeek: number){
    this.dayOfWeek = dayOfWeek
  }
  getStartTime(): Date{
    return this.startTime;
  }
  setStartTime(startTime: Date){
    this.startTime = startTime;
  }
  getEndTime(): Date{
    return this.endTime;
  }
  setEndTime(endTime: Date){
    this.endTime = endTime;
  }
  getSequence(): number{
    return this.sequence;
  }
  setSequence(sequence: number){
    this.sequence = sequence;
  }
}