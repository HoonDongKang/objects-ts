import { Screening } from "./Screening";

export interface Discountcondition {
   isSatisfiedBy(screening: Screening): boolean;
}