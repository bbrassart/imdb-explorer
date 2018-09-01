import { Component, Input, OnChanges } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'movie-details',
  styleUrls: ['./movie-details.component.css'],
  templateUrl: './movie-details.component.html',
})


export class MovieDetailsComponent implements OnChanges {
  @Input() movie: Movie;

  dataSource = [];
  columnsToDisplay = ['poster', 'title', 'plot', 'imdbRating', 'actors', 'country', 'language', 'awards'];

  ngOnChanges() {
    this.dataSource = [this.movie];
  }
}
