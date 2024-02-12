import { Money } from "../../money/Money";
import { Movie } from "./Movie";

export class Screening {

  constructor(private movie: Movie, private sequence: number, private whenScreened: Date){
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  calculateFee(audienceCount: number): Money{
    switch(this.movie.getMovieType()){
      case "AMOUNT_DISCOUNT":
        if(this.movie.isDiscountable(this.whenScreened, this.sequence)){
          return this.movie.calculateAmountDiscountedFee().times(audienceCount);
        }
        break;
      case "PERCENT_DISCOUNT":
        if(this.movie.isDiscountable(this.whenScreened, this.sequence)){
          return this.movie.calculatePercentDiscountedFee().times(audienceCount);
        }
        break;
      case "NONE_PERCENT":
        return this.movie.calculateNoneDiscountedFee().times(audienceCount);
    }
  }

  getMovie(): Movie{
    return this.movie;
  }
  setMovie(movie: Movie){
    this.movie = movie;
  }
  getWhenScreened(): Date{
    return this.whenScreened;
  }
  setWhenScreened(whenScreened: Date){
    this.whenScreened = whenScreened;
  }
  getSequence(): number{
    return this.sequence;
  }
  setSequence(sequence: number){
    this.sequence = sequence;
  }

}