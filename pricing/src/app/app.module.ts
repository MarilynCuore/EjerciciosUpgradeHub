import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PrinCurrencyPipe } from './prin-currency.pipe';


const Material = [
  MatButtonModule,
  MatCheckboxModule,
  HttpClientModule,
]
@NgModule({
  declarations: [
    AppComponent,
    PrinCurrencyPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
