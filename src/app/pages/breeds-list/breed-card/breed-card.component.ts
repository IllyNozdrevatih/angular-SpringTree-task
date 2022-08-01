import {Component, Input, OnInit } from '@angular/core';
import {BreedCardComponentInterface} from './breed-card.component.interface';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit {
  @Input() breedCardItem!: BreedCardComponentInterface;

  constructor() { }

  ngOnInit(): void {
  }
}
