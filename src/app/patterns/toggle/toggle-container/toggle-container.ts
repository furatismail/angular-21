import { Component, computed, contentChild, effect } from '@angular/core';
import { ToggleButton } from '../toggle-button/toggle-button';

@Component({
  selector: 'app-toggle-container',
  imports: [],
  templateUrl: './toggle-container.html',
  styleUrl: './toggle-container.scss',
})
export class ToggleContainer {
  toggleButton = contentChild(ToggleButton);

  private button = computed(() => this.toggleButton())

  private logggerEffect = effect(() => {
    const button = this.button();
    if(button) {
      console.log('Je tu a mam jeho hodnotu: ', button)
    }
  })

  turnOn() {
    const button = this.button();
    if(button) {
      button.state.set('On')
    }
  }

  turnOff() {
    const button = this.button();
    if(button) {
      button.state.set('Off')
    }
  }
}
