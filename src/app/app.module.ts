import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgRx
import {  StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers } from './app.reducer';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(
      appReducers,
      {runtimeChecks: {
          strictActionImmutability: false,
          strictStateImmutability: false
        }
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
