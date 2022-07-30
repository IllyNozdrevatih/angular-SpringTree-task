import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-base-pagination',
  templateUrl: './base-pagination.component.html',
  styleUrls: ['./base-pagination.component.css']
})
export class BasePaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Output() handlerChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handlerButtonPrevPage() {
    if (this.currentPage === 1) return
    this.moveToPage(this.currentPage - 1)
  }

  handlerButtonNextPage() {
    this.moveToPage(this.currentPage + 1)
  }

  moveToPage(pageNumber: number){
    this.handlerChange.emit(pageNumber)
  }
}
