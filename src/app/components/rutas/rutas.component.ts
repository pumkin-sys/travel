import { Component,OnInit,ViewChild} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AutoComponent,PlaceSearchResult} from '../rutas/auto/auto.component';
import { CardComponent } from '../rutas/card/card.component';
import { MapComponent } from '../rutas/map/map.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {
  fromValue: PlaceSearchResult = { address: '' };
  toValue: PlaceSearchResult = { address: '' };
  
  }
  



