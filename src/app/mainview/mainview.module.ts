import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogSectionComponent } from './catalog-section/catalog-section.component';
import { CategorizationComponent } from './categorization/categorization.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { CapsuleButtonComponent } from '../components/capsule-button/capsule-button.component';
@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    CatalogSectionComponent,
    CategorizationComponent,
    AdvertisementComponent,
    CapsuleButtonComponent,
  ],
  imports: [CommonModule],
  exports: [HomepageComponent, HeaderComponent, FooterComponent],
})
export class MainviewModule {}
