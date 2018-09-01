export class Movie {
  constructor(
    public plot: string,
    public title: string,
    public actors: string,
    public awards: string,
    public country: string,
    public poster: string,
    public language: string,
    public imdbRating: string,
  ) {
    this.plot = plot;
    this.actors = actors;
    this.title = title;
    this.awards = awards;
    this.country = country;
    this.poster = poster;
    this.language = language;
    this.country = country;
    this.poster = poster;
    this.imdbRating = imdbRating;
  }
}
