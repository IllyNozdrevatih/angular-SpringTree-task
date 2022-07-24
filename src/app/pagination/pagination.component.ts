import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Output() handlerChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handlerButtonPrevPage() {
    this.moveToPage(this.currentPage - 1)
  }

  handlerButtonNextPage() {
    this.moveToPage(this.currentPage + 1)
  }

  moveToPage(pageNumber: number){
    this.handlerChange.emit(pageNumber)
  }
}
