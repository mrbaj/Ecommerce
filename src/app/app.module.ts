import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { CircleCardComponent } from './components/circle-card/circle-card.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { DataService } from './data.service';
import { MainviewModule } from './mainview/mainview.module';
import { MatInputModule } from '@angular/material/input';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductViewPageComponent } from './components/product-view-page/product-view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleCardComponent,
    ProductViewComponent,
    TopbarComponent,
    LoginComponent,
    ProductViewPageComponent,
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
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [RestService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
