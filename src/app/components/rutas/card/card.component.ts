import { Component,OnInit ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PlaceSearchResult } from '../auto/auto.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() data: PlaceSearchResult | undefined;

  constructor() {}

  ngOnInit(): void {}

}
