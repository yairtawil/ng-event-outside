import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgEventOutsideModule } from 'ng-event-outside';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgEventOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
