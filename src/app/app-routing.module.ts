import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { SuperuserComponent } from './components/superuser/superuser.component';
import { PlacesComponent } from './components/places/places.component';

const routes: Routes = [
  { path: 'login',component:LoginComponent},
  { path: 'home', component:HomeComponent},
  { path: 'user', component:UserComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'rutas', component:RutasComponent},
  { path: 'superUser', component:SuperuserComponent},
  { path: 'places', component:PlacesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
