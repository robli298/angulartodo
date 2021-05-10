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
import { ContentItemComponent } from './page-header/content-item/content-item.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SharedModule } from './shared/shared.module';
import { MyButtonComponent } from './page-header/my-button/my-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    ContentItemComponent,
    MyButtonComponent
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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
