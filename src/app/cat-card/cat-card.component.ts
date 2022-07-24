import {Component, Input, OnInit} from '@angular/core';
import {CatCard} from './cat-card.component.interface';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() catCardItem!: CatCard;

  constructor() { }

  ngOnInit(): void {
  }

}
