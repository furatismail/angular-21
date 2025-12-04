import { Component, signal } from '@angular/core';
import { AppWindow } from './directives/app-window';

@Component({
  selector: 'app-root',
  imports: [AppWindow],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = signal('Svete')

  changeTitle() {
    this.title.set('Ahoj z noveho okna...')
  }
}
