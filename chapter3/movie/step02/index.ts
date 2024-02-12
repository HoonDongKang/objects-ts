import { Money } from "../../money/Money";
import { Customer } from "./Customer";
import { DiscountCondition } from "./Discountcondition";
import { DiscountConditionType } from "./DiscountConditionType";
import { Movie } from "./Movie";
import { MovieType } from "./MovieType";
import { ReservationAgency } from "./ReservationAgency";
import { Screening } from "./Screening";

const avatar = new Movie(
                  "Avatar", 
                  300, new Money(1000), 
                  [new DiscountCondition(DiscountConditionType.SEQUENCE, 3, 0, new Date("2023-11-26"), new Date("2023-11-27"))],
                  MovieType.AMOUNT_DISCOUNT,
                  new Money(300),
                  10)

const customer = new Customer("kand","d159123");
const avatarScreening = new Screening(avatar, 1, new Date("2023-11-26"));
const reservation = new ReservationAgency().reserve(avatarScreening, customer, 30);

console.log(
  `${new Date(
    '2023-11-26'
  )} 아바타 관람비 : ${reservation.getFee()} 원 `
);