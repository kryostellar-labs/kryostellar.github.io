import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './components/app.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppComponent,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
