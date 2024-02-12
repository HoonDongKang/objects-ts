import { Movie } from "./Movie";

export class Screening {

  constructor(private movie: Movie, private sequence: number, private whenScreened: Date){
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
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