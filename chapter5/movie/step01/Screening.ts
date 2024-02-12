import { Money } from "../../money/Money";
import { Customer } from "./Customer";
import { Movie } from "./Movie";
import { Reservation } from "./Reservation";

export class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  reserve(customer: Customer, audienceCount: number){
    return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
  }

  private calculateFee(audienceCount: number): Money{
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }

  getWhenScreened(): Date{
    return this.whenScreened;
  }

  getSequence(): number{
    return this.sequence;
  }
}