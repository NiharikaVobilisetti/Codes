import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { LandingComponent } from './shared/components/landing/landing.component';
import { ViewOrdersComponent } from './orders/components/view-orders/view-orders.component';

export const routes: Routes = [
   {path:'login', component:LoginComponent},
   {path:'', redirectTo:'login',pathMatch:'full'},
   {path:'view-orders',component:ViewOrdersComponent},
   {path:'', component:LayoutComponent, children:[
      {path:'products', component:ProductsComponent},
      {path:'categories', component:CategoriesComponent}
   ]}
     
];
