import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExampleSignal } from "./components/example-signal/example-signal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AsyncPipe, JsonPipe, ExampleSignal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  

}
