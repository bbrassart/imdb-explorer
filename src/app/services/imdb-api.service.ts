import { Injectable } from '@angular/core';
import { AppSettings } from './app_settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ImdbApiService {
  constructor(
    private appSettings: AppSettings,
    private http: HttpClient,
  ) {
    this.mainEndpoint = this.appSettings.getMainEndpoint();
  }

  getMovie = input => this.http.get(`${this.mainEndpoint}&t=${input}`);
}

