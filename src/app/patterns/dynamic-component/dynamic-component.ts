import { Component, ElementRef, ViewChild, viewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  imports: [],
  templateUrl: './dynamic-component.html',
  styleUrl: './dynamic-component.scss',
})
export class DynamicComponent {

  container = viewChild('container', {read: ViewContainerRef})

  async load() {
    const vcr = this.container()
    console.log(vcr)

    const cmp = await import('../hello/hello')
    const helloComponent = cmp.Hello
    const componentRef = vcr?.createComponent(helloComponent)
  }

  clear() {
        const vcr = this.container();
        vcr?.clear()
  }
}
