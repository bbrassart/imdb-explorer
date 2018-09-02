import { Component, OnInit } from '@angular/core';
import { ImdbApiService } from '../../services/imdb-api.service';
import { Movie } from '../../models/movie.model';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private imdbApiService: ImdbApiService,
    private fb: FormBuilder,
  ) {}

  myForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
  });

  appName = 'IMDB explorer';
  error: boolean;
  movie: Movie;

  ngOnInit() {
    this.error = false;
  }

  getMovie = (formDirective: FormGroupDirective) => {
    if (this.myForm.invalid) {
      return;
    }
    this.imdbApiService
      .getMovie(this.myForm.value.title)
      .subscribe(data => {
        if (data['Response'] === 'False') {
          this.error = true;
          this.movie = null;
          formDirective.resetForm();
          return;
        }

        this.movie = new Movie(
          data['Poster'],
          data['Title'],
          data['Plot'],
          data['imdbRating'],
          data['Actors'],
          data['Country'],
          data['Language'],
          data['Awards'],
        );

        this.error = false;
        formDirective.resetForm();
      });

  }
}
