import { Component,OnInit } from '@angular/core';
import Place from '../../../../interfaces/place.interface';
import { PlacesService } from '../../../../services/places.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  places: Place[];

  constructor(
    private placesService: PlacesService
  ) {
    this.places = [{
      name: '',
      description: '',
    }];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlace(place);
    console.log(response);
  }
}
