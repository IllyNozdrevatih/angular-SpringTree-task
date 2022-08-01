import {Component, Input, OnInit } from '@angular/core';
import {BreedCardInterface} from './breed-card.interface';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit {
  @Input() breedCardItem!: BreedCardInterface;

  constructor() { }

  ngOnInit(): void {
  }
}
