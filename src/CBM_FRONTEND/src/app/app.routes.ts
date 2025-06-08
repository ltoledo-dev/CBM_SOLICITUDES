import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { PurchaseRequestFormComponent } from './features/purchase-request/components/purchase-request-form/purchase-request-form.component';
import { ClientFormComponent } from './features/client/components/client-form/client-form.component';
import { ProductFormComponent } from './features/product/components/product-form/product-form.component';
import {AuthenticationComponent} from "./features/authentication/components/authentication/authentication.component";

export const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'Inicio', component: HomePageComponent },
  { path: 'Solicitudes', component: PurchaseRequestFormComponent },
  { path: 'Clientes', component: ClientFormComponent },
  { path: 'Productos', component: ProductFormComponent },
];
