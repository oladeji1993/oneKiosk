import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./pages/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'confirm-page',
    loadChildren: () => import('./pages/confirm-page/confirm-page.module').then( m => m.ConfirmPagePageModule)
  },
  {
    path: 'reset2',
    loadChildren: () => import('./pages/reset2/reset2.module').then( m => m.Reset2PageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-up-confirm',
    loadChildren: () => import('./pages/sign-up-confirm/sign-up-confirm.module').then( m => m.SignUpConfirmPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'sign-up-success',
    loadChildren: () => import('./pages/sign-up-success/sign-up-success.module').then( m => m.SignUpSuccessPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'burger-details',
    loadChildren: () => import('./pages/burger-details/burger-details.module').then( m => m.BurgerDetailsPageModule)
  },
  {
    path: 'super-mart',
    loadChildren: () => import('./pages/super-mart/super-mart.module').then( m => m.SuperMartPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./pages/cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'checkout-page',
    loadChildren: () => import('./pages/checkout-page/checkout-page.module').then( m => m.CheckoutPagePageModule)
  },
  {
    path: 'order-done',
    loadChildren: () => import('./pages/order-done/order-done.module').then( m => m.OrderDonePageModule)
  },
  {
    path: 'cart-success',
    loadChildren: () => import('./pages/cart-success/cart-success.module').then( m => m.CartSuccessPageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./menu-pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
  },
  {
    path: 'profile-edit-page',
    loadChildren: () => import('./menu-pages/profile-edit-page/profile-edit-page.module').then( m => m.ProfileEditPagePageModule)
  },
  {
    path: 'notification-page',
    loadChildren: () => import('./menu-pages/notification-page/notification-page.module').then( m => m.NotificationPagePageModule)
  },
  {
    path: 'location-page',
    loadChildren: () => import('./menu-pages/location-page/location-page.module').then( m => m.LocationPagePageModule)
  },
  {
    path: 'order-status',
    loadChildren: () => import('./menu-pages/order-status/order-status.module').then( m => m.OrderStatusPageModule)
  },
  {
    path: 'add-address-page',
    loadChildren: () => import('./menu-pages/add-address-page/add-address-page.module').then( m => m.AddAddressPagePageModule)
  },
  {
    path: 'privacy-page',
    loadChildren: () => import('./menu-pages/privacy-page/privacy-page.module').then( m => m.PrivacyPagePageModule)
  },
  {
    path: 'help-page',
    loadChildren: () => import('./menu-pages/help-page/help-page.module').then( m => m.HelpPagePageModule)
  },
  {
    path: 'about-us-page',
    loadChildren: () => import('./menu-pages/about-us-page/about-us-page.module').then( m => m.AboutUsPagePageModule)
  },
  {
    path: 'settings-page',
    loadChildren: () => import('./menu-pages/settings-page/settings-page.module').then( m => m.SettingsPagePageModule)
  },
  {
    path: 'order-page',
    loadChildren: () => import('./menu-pages/order-page/order-page.module').then( m => m.OrderPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
