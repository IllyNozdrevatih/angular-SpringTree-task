import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent implements OnInit {
  @Input() isShow!: boolean
  @Output() handlerClose = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handlerButtonClose(){
    this.handlerClose.emit()
  }

  handlerClickModalWrap(e: MouseEvent){
    if ((e.target as HTMLDivElement).classList.contains('modal')){
      this.handlerButtonClose()
    }
  }
}
