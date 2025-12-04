import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, required, schema, Field } from '@angular/forms/signals';

export interface LoginData {
  email: string
}

@Component({
  selector: 'app-signal-form',
  imports: [Field, JsonPipe],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.scss',
})
export class SignalForm {
  loginModel = signal<LoginData>({
    email: ''
  })

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {message: 'Email je povinny'})
  })

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    console.log('$event: ', $event)

    console.log(this.loginModel())
  }
}
