import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SelfProductComponent } from './pages/self-product/self-product.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { MenuBasicComponent } from './pages/menu/menu-basic/menu-basic.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticleSinglePageComponent } from './pages/article-single-page/article-single-page.component';
import { BlogBasicComponent } from './pages/blog/blog-basic/blog-basic.component';
import { ContactComponent } from './pages/contact/contact.component';

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
        redirectTo: 'menu',
        pathMatch: 'full',
      },
      {
        path: 'menu',
        component: MenuBasicComponent,
      },
      {
        path: 'self-product/:id',
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
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full',
      },
      {
        path: 'blog',
        component: BlogBasicComponent,
      },
      {
        path: 'article/:id',
        component: ArticleSinglePageComponent,
      },
    ],
  },
  {
    path: 'container',
    component: ContactComponent,
  },
];
