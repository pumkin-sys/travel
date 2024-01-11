import { Component,OnInit } from '@angular/core';
import { PlacesService } from '../../../../services/place.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent implements OnInit {
  constructor(private placesServices: PlacesService) {}

	get isUserLocationReady(): boolean {
		return this.placesServices.isUserLocationReady;
	}
	ngOnInit(): void {}
}
