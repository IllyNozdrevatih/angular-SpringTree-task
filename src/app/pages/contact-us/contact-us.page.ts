import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.css']
})
export class ContactUsPage implements OnInit {
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
