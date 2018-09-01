import { Component } from '@angular/core';
import { ImdbApiService } from '../../services/imdb-api.service';
import { Movie } from '../../models/movie.model';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(
    private imdbApiService: ImdbApiService,
    private fb: FormBuilder,
  ) {
    this.myForm = fb.group({
      title: [null, Validators.required],
    });
  }

  myForm: FormGroup;

  appName = 'IMDB explorer';

  getMovie = (formDirective: FormGroupDirective) => {
    if (this.myForm.invalid) {
      return;
    }
    this.imdbApiService
      .getMovie(this.myForm.value.title)
      .subscribe(data => {
        const {
          Plot,
          Title,
          Actors,
          Awards,
          Country,
          Poster,
          Language,
          imdbRating
        } = data;

        this.movie = new Movie(
          Plot,
          Title,
          Actors,
          Awards,
          Country,
          Poster,
          Language,
          imdbRating
        );
      });
    formDirective.resetForm();
    this.myForm.reset();
  }
}
