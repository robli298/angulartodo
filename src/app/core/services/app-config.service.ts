import { getNumberOfCurrencyDigits } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AppConfig {
}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  loaded = false;

  constructor(private http: HttpClient) {}
  loadConfig(): Promise<AppConfig | void> {
    return this.http
      .get<AppConfig>('/assets/app.config.json')
      .toPromise()
      .then((data) => {
        this.config = data;
        this.loaded = true;
      });
  }

  get config(): AppConfig {
    return this.config;
  }

  set config(config: AppConfig) {
    this.config = config;
  }
}
