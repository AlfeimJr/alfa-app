import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { BtnAcceptComponent } from './components/btn-accept/btn-accept.component';
import {MatButtonModule} from '@angular/material/button';
import { BtnBasicComponent } from './components/btn-basic/btn-basic.component';
import { PanelControlComponent } from './pages/panel-control/panel-control.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent,
    TopBarComponent,
    BtnAcceptComponent,
    BtnBasicComponent,
    PanelControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
