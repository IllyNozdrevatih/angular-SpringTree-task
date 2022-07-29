import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatCard} from './cat-card.component.interface';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() catCardItem!: CatCard;
  @Output() handlerFavoriteClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handlerFavoriteIconClick(catItemID: string){
    this.handlerFavoriteClick.emit(catItemID)
  }
}
