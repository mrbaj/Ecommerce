import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogSectionComponent } from './catalog-section/catalog-section.component';
import { CategorizationComponent } from './categorization/categorization.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { CapsuleButtonComponent } from '../components/capsule-button/capsule-button.component';
import { DisplayCardComponent } from '../components/display-card/display-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomepageComponent,
    DisplayCardComponent,
    HeaderComponent,
    FooterComponent,
    CatalogSectionComponent,
    CategorizationComponent,
    AdvertisementComponent,
    CapsuleButtonComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MatInputModule,
    MatIconModule,
  ],
})
export class MainviewModule {}
