import { Money } from "../../money/Money";
import { Customer } from "./Customer";
import { DiscountConditionType } from "./DiscountConditionType";
import { Movie } from "./Movie";
import { Reservation } from "./Reservation";
import { Screening } from "./Screening";


export class ReservationAgency {
    public reserve(screening: Screening, customer: Customer, audienceCount: number ): Reservation{
    const movie: Movie = screening.getMovie();
    let fee: Money;

    fee = screening.calculateFee(audienceCount);

    return new Reservation(customer, screening, fee, audienceCount);
   }
}