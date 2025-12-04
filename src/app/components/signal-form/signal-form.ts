import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, required, schema, Field, minLength, email, PathKind, SchemaPath, SchemaPathRules, validate, customError } from '@angular/forms/signals';

export interface LoginData {
  email: string,
  password: string
}

export function blackList<TPathKind extends PathKind = PathKind.Root>(
  path: SchemaPath<string, SchemaPathRules.Supported, TPathKind>,
  config?: any
): void {
  validate(path, (ctx) => {

    const value = ctx.value();
    
    // If value is 'admin', return validation error
    if (value.includes('admin')) {
      // Otherwise, create default error with custom message or default message
      const message = typeof config?.message === 'function' 
        ? config.message(ctx) 
        : config?.message || 'This value is blacklisted';
      
      return customError({ kind: 'blackListInvalid', message });
    }
    
    // Value is valid
    return null;
  });
}

@Component({
  selector: 'app-signal-form',
  imports: [Field, JsonPipe],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.scss',
})
export class SignalForm {
  private  = schema<string>((path) => {
    required(path, {message: "Toto je povinne"}),
    email(path, { message: 'The email address is not valid.' });
  })

  loginModel = signal<LoginData>({
    email: '',
    password: ''
  })

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {message: 'Email je povinny'}),
    required(schemaPath.password, {message: 'password je povinny'}),
    blackList(schemaPath.email, {message: "Ahoj je tu chyba"})

  })

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    console.log('$event: ', $event)

    console.log(this.loginModel())
  }
}
