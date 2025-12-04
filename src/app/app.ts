import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ExampleSignal } from "./components/example-signal/example-signal";
import { GlitchFree } from "./components/glitch-free/glitch-free";
import { ComputedEquality } from "./components/computed-equality/computed-equality";
import { IsEven } from "./components/is-even/is-even";
// import { EffectHttp } from "./components/effect-http/effect-http";
import { SignalForm } from "./components/signal-form/signal-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AsyncPipe, JsonPipe, ExampleSignal, GlitchFree, ComputedEquality, ComputedEquality, IsEven, SignalForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  
  value = signal('2')

  constructor() {
    setTimeout(() => {
      this.value.set('5')
    }, 3000);
  }

  onIsEvenChanged(isEven: boolean) {
    console.log('isEven', isEven)
  }
}
