import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ClienteComponent } from './component/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProtegidaComponent,
    HomeComponent,
    PreciosComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(
    {domain: 'dev-0n0haspc1h5gk3sr.us.auth0.com',
    clientId: 'VGo0jzE8tY9bXDu8hxIriJCxLXEOaadu',
  }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
