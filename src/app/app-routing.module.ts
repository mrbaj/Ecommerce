import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductViewPageComponent } from './components/product-view-page/product-view-page.component';
import { HomepageComponent } from './mainview/homepage/homepage.component';
import { ProductDetailsComponent } from './productsdetails/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },

  { path: 'product/:id', component: ProductDetailsComponent },

 //{ path: 'product/:id', component: ProductViewPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
