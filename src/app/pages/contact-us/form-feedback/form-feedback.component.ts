import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent implements OnInit {
  submitted = false
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

  get emailErrorMassage() {
    let errorMassage = 'Email is '
    const errorsArray = []
    if (this.email?.errors?.['required']) errorsArray.push('required')
    if (this.email?.errors?.['email']) errorsArray.push('invalid value')

    errorMassage+= errorsArray.join(',')

    return errorMassage
  }

  handlerFormFeedback(){
    if (this.feedbackForm.status === "INVALID") {
      this.submitted = true
      return
    }
    this.feedbackForm.reset()
    this.submitted = false
    this.handlerSubmit.emit()
  }
}
