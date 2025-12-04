import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child implements DoCheck {

  

  ngDoCheck() {
    console.log('Child component is shouting....')
  }
}
