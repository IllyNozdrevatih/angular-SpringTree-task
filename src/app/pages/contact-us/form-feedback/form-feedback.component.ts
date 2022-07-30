import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent implements OnInit {
  @Output() handlerSubmit = new EventEmitter<number>();

  constructor() { }

  feedbackForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  get name() { return this.feedbackForm.get('name'); }
  get email() { return this.feedbackForm.get('email'); }
  get message() { return this.feedbackForm.get('message'); }

  handlerFormFeedback(){
    if (this.feedbackForm.status === "INVALID") return
    this.handlerSubmit.emit()
  }
}
