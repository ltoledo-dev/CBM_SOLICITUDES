import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/components/home-page/home-page.component';
import { PurchaseRequestFormComponent } from './features/purchase-request/components/purchase-request-form/purchase-request-form.component';
import { ClientFormComponent } from './features/client/components/client-form/client-form.component';
import { ProductFormComponent } from './features/product/components/product-form/product-form.component';
import { AuthenticationComponent } from './features/authentication/components/authentication/authentication.component';
import { AuthGuard } from '../guard/auth.guard';
import { LoginGuard } from "../guard/login.guard";
import {
  ClientesConSolicitudesComponent
} from "./features/reports/components/clientes-con-solicitudes/clientes-con-solicitudes.component";
import {
  ClientesConTotalProductosComponent
} from "./features/reports/components/clientes-con-total-productos/clientes-con-total-productos.component";
import {
  ProductosConFechasIngresoComponent
} from "./features/reports/components/productos-con-fechas-ingreso/productos-con-fechas-ingreso.component";
import {SolicitudPorDiaComponent} from "./features/reports/components/solicitud-por-dia/solicitud-por-dia.component";
import {
  SolicitudesConEstadoComponent
} from "./features/reports/components/solicitudes-con-estado/solicitudes-con-estado.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent, canActivate: [LoginGuard] },
  { path: 'Inicio', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'Solicitudes', component: PurchaseRequestFormComponent, canActivate: [AuthGuard] },
  { path: 'Clientes', component: ClientFormComponent, canActivate: [AuthGuard] },
  { path: 'Productos', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'ClientesConSolicitudes', component: ClientesConSolicitudesComponent, canActivate: [AuthGuard] },
  { path: 'ClientesConTotalProductos', component: ClientesConTotalProductosComponent, canActivate: [AuthGuard] },
  { path: 'ProductosConFechasIngreso', component: ProductosConFechasIngresoComponent, canActivate: [AuthGuard] },
  { path: 'SolicitudesPorDia', component: SolicitudPorDiaComponent, canActivate: [AuthGuard] },
  { path: 'SolicitudesConEstado', component: SolicitudesConEstadoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
