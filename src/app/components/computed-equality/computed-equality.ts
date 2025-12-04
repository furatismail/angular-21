import { JsonPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-computed-equality',
  imports: [JsonPipe],
  templateUrl: './computed-equality.html',
  styleUrl: './computed-equality.scss',
})
export class ComputedEquality {
  user = signal<any>({
    id: 1,
    name: 'John Doe',
    email: 'john@email.com'
  })

  counterWithout = signal(0)
  counterWithEquality = signal(0)

  userDisplayWithoutEquality = computed(() => {
    const u = this.user();
    return `${u.name} ${u.email}`
  })

  userDisplayWithEquality = computed(() => {
    const u = this.user();
    return `${u.name}`
  },
    {
      equal: (a: string, b: string) => a === b
    })

  constructor() {
    effect(() => {
      this.userDisplayWithoutEquality()
      this.counterWithout.update((count) => count + 1)
    })

    effect(() => {
      this.userDisplayWithEquality()
      this.counterWithEquality.update((count) => count + 1)
    })

    setTimeout(() => {
      this.user.set({
        id: 1,
        name: 'Carl Doe',
        email: 'carl@email.com'
      })
    }, 3000);

    setTimeout(() => {
      this.user.update((u) => ({
          ...u,
          email: 'carl2@email.com'
      }))
    }, 4000);
  }


}
