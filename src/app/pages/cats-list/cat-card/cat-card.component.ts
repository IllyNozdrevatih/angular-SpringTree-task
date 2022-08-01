import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatCardInterface} from './cat-card.component.interface';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() catCardItem!: CatCardInterface;
  @Input() isFavorite!: boolean;
  @Output() handlerFavoriteClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   *
   * @param catItemID
   */
  handlerFavoriteIconClick(catItemID: string){
    this.handlerFavoriteClick.emit(catItemID)
  }
}
