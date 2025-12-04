import { Component, computed, effect, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-is-even',
  imports: [],
  templateUrl: './is-even.html',
  styleUrl: './is-even.scss',
})
export class IsEven {
  counter = input.required<number, string>({
    alias: 'counterValue',
    transform: (value: string) : number => {
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? 0 : parsed
    }
  })

  isEvenWithTranform = computed((): boolean => {
    const value = this.counter();
    return value % 2 === 0
  })

  isEvenChanged = output<boolean>();

  constructor() {
    effect(() => {
      const isEven = this.isEvenWithTranform();
      this.isEvenChanged.emit(isEven);
    })
  }
} 
