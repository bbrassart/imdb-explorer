export class Movie {
  constructor(
    public poster: string,
    public title: string,
    public plot: string,
    public imdbRating: string,
    public actors: string,
    public country: string,
    public language: string,
    public awards: string,
  ) {
    this.poster = poster;
    this.title = title;
    this.plot = plot;
    this.imdbRating = imdbRating;
    this.actors = actors;
    this.country = country;
    this.language = language;
    this.awards = awards;
  }
}
