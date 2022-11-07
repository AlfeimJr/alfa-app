import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtnAcceptComponent } from './components/btn-accept/btn-accept.component';
import { CadastreProductComponent } from './pages/cadastre-product/cadastre-product.component';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelControlComponent } from './pages/panel-control/panel-control.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';

const routes: Routes = [
  {path:'create', component: CreateComponent},
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard]},
  {path: '', component: PrincipalComponent, canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'components', component: BtnAcceptComponent },
      {path: 'panel-control', component: PanelControlComponent, children: [
        {path: 'cadastre-product', component: CadastreProductComponent}
      ]}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
