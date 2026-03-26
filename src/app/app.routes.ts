import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SelfProductComponent } from './pages/self-product/self-product.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { MenuBasicComponent } from './pages/menu/menu-basic/menu-basic.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu-basic',
        pathMatch: 'full',
      },
      {
        path:'menu-basic',
        component:MenuBasicComponent
      },
      {
        path: 'self-product',
        component: SelfProductComponent,
      },
      {
        path: 'checkout-page',
        component: CheckoutPageComponent,
      },
    ],
  },

  {
    path: 'pricing-page',
    component: PricingPageComponent,
  },
];
