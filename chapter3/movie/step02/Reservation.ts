
import { Money } from "../../money/Money";
import { Customer } from "./Customer";
import { Screening } from "./Screening";

export class Reservation {

  constructor(
    private customer: Customer, 
    private screening: Screening, 
    private fee: Money, 
    private audienceCount: number
    ){
    this.customer
    this.screening
    this.fee
    this.audienceCount
  };

  getCustomer(): Customer{
    return this.customer;
  }
  setCustomer(customer: Customer){
    this.customer = customer;
  }
  getScreening(): Screening{
    return this.screening;
  }
  setScreening(screening: Screening){
    this.screening = screening;
  }
  getFee(): Money{
    return this.fee;
  }
  setFee(fee: Money){
    this.fee = fee;
  }
  getAudienceCount(): number{
    return this.audienceCount;
  }
  setAudienceCount(audienceCount: number){
    this.audienceCount = audienceCount;
  }

}