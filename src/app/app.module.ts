import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsuleButtonComponent } from './components/capsule-button/capsule-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { DisplayCardComponent } from './components/display-card/display-card.component';
import { DisplayCardService } from './services/display-card.service';
import { CircleCardComponent } from './components/circle-card/circle-card.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

@NgModule({
  declarations: [AppComponent, CapsuleButtonComponent, DisplayCardComponent, CircleCardComponent, ProductViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [DisplayCardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
