import { getNumberOfCurrencyDigits } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AppConfig {}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  config!: AppConfig;
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

  getConfig(): AppConfig {
    return this.config;
  }

  setConfig(config: AppConfig): void {
    this.config = config;
  }
}
