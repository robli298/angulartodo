import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FakeBackendInterceptor } from './core/interceptors/fake-backend.interceptor';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
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

    StoreModule.forRoot({}, {}),

    EffectsModule.forRoot([])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
