import { Component, effect, ElementRef, inject, Renderer2, viewChild } from '@angular/core';

@Component({
  selector: 'app-circle',
  imports: [],
  templateUrl: './circle.html',
  styleUrl: './circle.scss',
})
export class Circle {
myContainer = viewChild('myContainer', { read: ElementRef });
  private renderer = inject(Renderer2)

private initializeEffect = effect(() => {
  const container = this.myContainer()
  
  if(!container) {
    console.log('Nic tu jeste neni...')
    return
  }

  setTimeout(() => {
    console.log(container)
    const svgElement = container.nativeElement.querySelector('svg')
    if(svgElement) {
      this.renderer.addClass(svgElement, 'rotate-circle')
    }
  }, 3000);
})
}
