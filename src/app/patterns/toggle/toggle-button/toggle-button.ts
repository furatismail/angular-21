import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  imports: [],
  templateUrl: './toggle-button.html',
  styleUrl: './toggle-button.scss',
})
export class ToggleButton {
  state = signal<string>('Off');

  toggle() {
    this.state.update(current => current === 'Off' ? 'On' : 'Off')
  }
}
