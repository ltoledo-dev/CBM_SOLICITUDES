import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { PurchaseRequestFormComponent } from './features/purchase-request/components/purchase-request-form/purchase-request-form.component';
import { ClientFormComponent } from './features/client/components/client-form/client-form.component';
import { ProductFormComponent } from './features/product/components/product-form/product-form.component';
import { AuthenticationComponent } from './features/authentication/components/authentication/authentication.component';
import { AuthGuard } from '../guard/auth.guard';
import { LoginGuard } from "../guard/login.guard";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent, canActivate: [LoginGuard] },
  { path: 'Inicio', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'Solicitudes', component: PurchaseRequestFormComponent, canActivate: [AuthGuard] },
  { path: 'Clientes', component: ClientFormComponent, canActivate: [AuthGuard] },
  { path: 'Productos', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
