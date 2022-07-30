import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  isShowModal = false

  constructor() { }

  ngOnInit(): void {
  }

  handlerModalClose(){
    this.isShowModal = false
  }

  handlerFeedbackFormSubmit(){
    this.isShowModal = true
  }
}
