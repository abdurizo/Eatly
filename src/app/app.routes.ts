import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SelfProductComponent } from './pages/self-product/self-product.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'self-product',
    component: SelfProductComponent,
  },
  {
    path: 'checkout-page',
    component: CheckoutPageComponent,
  },
];
