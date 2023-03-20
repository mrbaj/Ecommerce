import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CartDetailedViewComponent } from './cart/cart-detailed-view/cart-detailed-view.component';
import { LoginComponent } from './components/login/login.component';
import { GuardService } from './guard.service';
import { HomepageComponent } from './mainview/homepage/homepage.component';
import { ProductDetailsComponent } from './productsdetails/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canMatch: [GuardService],
  },
  { path: 'cart', component: CartDetailedViewComponent },

  { path: 'product/:id', component: ProductDetailsComponent },

  //{ path: 'product/:id', component: ProductViewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
