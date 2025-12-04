import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Field } from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  imports: [Field, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {

}
