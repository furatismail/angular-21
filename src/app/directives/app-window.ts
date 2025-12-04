import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWindow]',
  exportAs: 'portal'
})
export class AppWindow {
  // reference na DOM element, na kterym bude direktiva aplikovana
  private element!: HTMLElement

  // Reference na pubodni element v puvodnim okne
  private parent!: Node | null

  private window: Window | null = null;

  private hostRef = inject(ElementRef<HTMLElement>)

  private renderer = inject(Renderer2)

  constructor() {
    this.element = this.hostRef.nativeElement;
    this.parent = this.renderer.parentNode(this.element)

    console.log('element: ', this.element)
    console.log('parent: ', this.parent)
   }

   open() {
    console.log('Okno se otevrelo')
    this.window = window.open('', '', 'width=500, height=300')

    this.renderer.appendChild(this.window?.document.body, this.element)
   }

   close() {
    this.renderer.appendChild(this.parent, this.element);
    this.window?.close();
    this.window = null;
   }
}
