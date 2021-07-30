import { IMessage } from './../interfaces/i-message';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required]),
      lastName: this.formBuilder.control("", [Validators.required]),
      phone: this.formBuilder.control("", [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      message: this.formBuilder.control("", [Validators.required])
    });

    this.message = {
      firstName: '',
      lastName: '',
      phone: 0,
      email: '',
      message: '',
    }
  }
  public form: FormGroup;

  public message: IMessage;

  public data: object = {};

  public success = false

  ngOnInit(): void {
  }

  prepareDataToSend() {
    let formValue: IMessage = this.form.getRawValue();

    let dataToSend: IMessage = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      phone: formValue.phone,
      message: formValue.message
    };

    return dataToSend;
  }

  save() {
    console.log(this.form)
    if (this.form.valid) {
      let formData = this.prepareDataToSend();
      this.message = formData;
      this.form.reset();
      this.success = true;
    }
    else {
      alert("Form is not valid!");
    }
  }
}
