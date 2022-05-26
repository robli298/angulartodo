import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
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

const firebaseConfig = {
  apiKey: 'AIzaSyB4m2O3zpN3lZGfwNBbGGg9jLno7l6sj8w',
  authDomain: 'angular-todo-4359a.firebaseapp.com',
  databaseURL: 'https://angular-todo-4359a-default-rtdb.firebaseio.com',
  projectId: 'angular-todo-4359a',
  storageBucket: 'angular-todo-4359a.appspot.com',
  messagingSenderId: '829063093139',
  appId: '1:829063093139:web:43091bdee7a536ea016666',
  measurementId: 'G-CJS7SF7WC6'
};

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    // core and shared
    CoreModule,
    SharedModule,

    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // app
    AppRoutingModule,

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([]),

    // firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
