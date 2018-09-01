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
  myForm: FormGroup;
  appName: string;
  error: boolean;
  movie: Movie;

  constructor(
    private imdbApiService: ImdbApiService,
    private fb: FormBuilder,
  ) {
    this.myForm = fb.group({
      title: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.error = false;
    this.appName = 'IMDB explorer';
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
          data['Plot'],
          data['Actors'],
          data['Title'],
          data['Awards'],
          data['Country'],
          data['Poster'],
          data['Language'],
          data['imdbRating'],
        );

        this.error = false;
        formDirective.resetForm();
      });

  }
}
