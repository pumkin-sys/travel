import { Component,OnInit,ViewChild,Input} from '@angular/core';
import { GoogleMap,GoogleMapsModule,MapDirectionsService } from '@angular/google-maps';
import { BehaviorSubject, map} from 'rxjs';
import { PlaceSearchResult} from '../auto/auto.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  @ViewChild('map',{static:true})
  map!:GoogleMap

  @Input()
  from: PlaceSearchResult| undefined;

  @Input()
  to: PlaceSearchResult | undefined;

  markerPositions: google.maps.LatLng[] = [];

  zoom=5;

  directionsResult$ = new BehaviorSubject<
    google.maps.DirectionsResult | undefined
  >(undefined);

  constructor(private directionService: MapDirectionsService){}

  ngOnInit(): void {}

  ngOnChanges(){
    const fromLocation= this.from?.location;
    const toLocation= this.to?.location;

    if(fromLocation && toLocation){
      this.getDirection(fromLocation,toLocation);
    }else if (fromLocation){
      this.gotoLocation(fromLocation);
    }else if (toLocation){
      this.gotoLocation(toLocation);
    }
  }

  gotoLocation(location:google.maps.LatLng){
    this.markerPositions=[location];
    this.map.panTo(location);
    this.zoom=17;
    this.directionsResult$.next(undefined);

  }

  calculateDistance(fromLocation: google.maps.LatLng, toLocation: google.maps.LatLng) {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(fromLocation, toLocation);
    console.log(`La distancia entre las dos ubicaciones es ${distance} metros.`);
   }

  getDirection(fromLocation:google.maps.LatLng, toLocation:google.maps.LatLng){
    const request: google.maps.DirectionsRequest={
      destination:toLocation,
      origin:fromLocation,
      travelMode:google.maps.TravelMode.DRIVING,
    };

    this.directionService
      .route(request)
      .pipe(map((response)=> response.result))
      .subscribe((res)=>{
        this.directionsResult$.next(res);
        this.markerPositions=[];
      });
    }

}
