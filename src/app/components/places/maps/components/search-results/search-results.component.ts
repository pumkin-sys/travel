import { Component } from '@angular/core';
import { Feature } from '../../../../../../interfaces/places.interface';
import { MapService } from '../../../../../../services/map.service';
import { PlacesService } from '../../../../../../services/place.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  constructor(
		private placesService: PlacesService,
		private mapService: MapService
	) {}
	public selectedId: string = "";
	get isLoadingPlaces(): boolean {
		return this.placesService.isLoadingPlaces;
	}
	get places(): Feature[] {
		return this.placesService.places;
	}
	flyTo(place: Feature) {
		this.selectedId = place.id;
		const [lng, lat] = place.center;
		this.mapService.flyTo([lng, lat]);
		this.placesService.deletePlaces();
	}
	getDirections(place: Feature) {
		if (!this.placesService.userLocation)
			throw new Error("User location is not ready");

		this.placesService.deletePlaces();
		const start = this.placesService.userLocation;
		const end = place.center as [number, number];
		this.mapService.getRouteBetweenPoints(start, end);
	}
}
