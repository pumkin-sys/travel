import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';

import { GoogleMapsModule } from '@angular/google-maps';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { SuperuserComponent } from './components/superuser/superuser.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';
import { MapComponent } from './components/rutas/map/map.component';
import { AutoComponent } from './components/rutas/auto/auto.component';
import { CardComponent } from './components/rutas/card/card.component';
import { NewComponent } from './components/superuser/new/new.component';
import { ListComponent } from './components/superuser/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlacesComponent } from './components/places/places.component';
import { MapsComponent } from './components/places/maps/maps.component';
import { ComponentsComponent } from './components/places/maps/components/components.component';
import { BtnMyLocationComponent } from './components/places/maps/components/btn-my-location/btn-my-location.component';
import { LoadingComponent } from './components/places/maps/components/loading/loading.component';
import { MapViewComponent } from './components/places/maps/components/map-view/map-view.component';
import { NavbarComponent } from './components/places/maps/components/navbar/navbar.component';
import { SearchBarComponent } from './components/places/maps/components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/places/maps/components/search-results/search-results.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    RutasComponent,
    SuperuserComponent,
    HomeComponent,
    MapComponent,
    AutoComponent,
    CardComponent,
    ListComponent,
    NewComponent,
    PlacesComponent,
    MapsComponent,
    ComponentsComponent,
    BtnMyLocationComponent,
    LoadingComponent,
    MapViewComponent,
    NavbarComponent,
    SearchBarComponent,
    SearchResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
