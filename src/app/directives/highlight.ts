import { Directive, input, signal } from '@angular/core';

// Direktiva pro zvýraznění elementu při najetí myší
// Používá Angular 21 signals pro reaktivní správu stavu
@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '[style.backgroundColor]': 'backgroundColor()',
  },
})
export class Highlight {
  // Signal-based input (Angular 21)
  color = input.required<string>();

  // Signal pro barvu pozadí - reaktivní stav
  backgroundColor = signal<string | null>(null);

  ngDoCheck(): void {
    console.log(this.color(), 'ngDoCheck');
    console.log(this.backgroundColor(), 'ngDoCheck');
  }

  onMouseEnter(): void {
    this.backgroundColor.set(this.color());
  }

  onMouseLeave(): void {
    this.backgroundColor.set(null);
  }
}
  