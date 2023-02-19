import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { DisplayCardComponent } from './components/display-card/display-card.component';
import { CircleCardComponent } from './components/circle-card/circle-card.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { DataService } from './data.service';
import { MainviewModule } from './mainview/mainview.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCardComponent,
    CircleCardComponent,
    ProductViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    MainviewModule,
  ],
  providers: [RestService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
