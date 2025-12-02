import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Time } from './components/time/time';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Time],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-21');
}
