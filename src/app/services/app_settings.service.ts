import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AppSettings {
  ENDPOINT: String;

  constructor() {
    this.ENDPOINT = 'https://www.omdbapi.com/?apikey=950dc688';
  }

  getMainEndpoint() {
    return this.ENDPOINT;
  }
}
