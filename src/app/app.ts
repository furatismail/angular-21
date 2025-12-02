import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TimeModule } from "./components/time/time-module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TimeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-21');
}
