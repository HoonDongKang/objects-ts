import { Money } from "../../money/Money";
import { Customer } from "./Customer";
import { DiscountConditionType } from "./DiscountConditionType";
import { Movie } from "./Movie";
import { Reservation } from "./Reservation";
import { Screening } from "./Screening";


export class ReservationAgency {
    public reserve(screening: Screening, customer: Customer, audienceCount: number ): Reservation{
    const movie: Movie = screening.getMovie();
    let fee: Money

    let discountable = false;
    movie.getDiscountConditions().map((condition)=> {
      if(condition.getType() === DiscountConditionType.PERIOD) {
        discountable = 
          (screening.getWhenScreened().getDay() === condition.getDayOfWeek()) &&
          (condition.getStartTime().getTime() <= screening.getWhenScreened().getTime()) &&
          (condition.getEndTime().getTime() >= screening.getWhenScreened().getTime())
      } else{
        discountable = condition.getSequence() === screening.getSequence();
      }
    })
    if(discountable){
      let discountAmount = Money.ZERO;

      switch(movie.getMovieType()){
        case "AMOUNT_DISCOUNT":
          discountAmount = movie.getDiscountAmount();
          break;

        case "PERCENT_DISCOUNT":
          discountAmount = movie.getFee().times(movie.getDiscountPercent());
          break;
        
        case "NONE_PERCENT":
          discountAmount = Money.ZERO;
          break;
      }
      fee = movie.getFee().minus(discountAmount).times(audienceCount);
    } else{
      fee = movie.getFee();
    }

    return new Reservation(customer, screening, fee, audienceCount);
   }
}