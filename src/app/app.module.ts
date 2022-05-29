import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FakeBackendInterceptor } from './core/interceptors/fake-backend.interceptor';
import { appReducer } from './core/store/app.reducer';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {
  AppConfig,
  AppConfigService,
} from './core/services/app-config.service';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

export function initConfig(
  appConfigService: AppConfigService
): () => Promise<AppConfig | void> {
  return () => appConfigService.loadConfig();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    // core and shared
    CoreModule,
    SharedModule,

    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // app
    AppRoutingModule,

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([]),

    // firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
