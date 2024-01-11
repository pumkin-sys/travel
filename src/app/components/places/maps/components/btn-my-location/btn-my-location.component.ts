import { Component } from '@angular/core';
import { PlacesService } from "../../../../../../services/place.service";
import { MapService } from '../../../../../../services/map.service';
@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css'
})
export class BtnMyLocationComponent {
  constructor(
		private mapService: MapService,
		private placesServices: PlacesService
	) {}
	goToMyLocation() {
		if (!this.placesServices.isUserLocationReady) {
			throw new Error("User location is not ready");
		}
		if (!this.mapService.isMapReady) {
			throw new Error("Map is not ready");
		}
		this.mapService.flyTo(this.placesServices.userLocation!);
	}
}
