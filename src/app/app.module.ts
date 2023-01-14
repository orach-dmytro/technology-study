import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { modalWindowReducer } from './store/modal-window/modal-window.reducer';
import { authStateReducer } from './store/auth-form/auth-form.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    LoginComponent,
    BrowserModule,
    AppRoutingModule,
    ModalWindowComponent,
    AuthFormComponent,
    StoreModule.forRoot({
      modalWindowState: modalWindowReducer,
      authState: authStateReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
