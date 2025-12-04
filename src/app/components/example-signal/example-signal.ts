import { NgFor } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-example-signal',
  imports: [NgFor],
  templateUrl: './example-signal.html',
  styleUrl: './example-signal.scss',
})
export class ExampleSignal implements OnInit {
  // search = signal('');
  // users = signal([
  //   { id: 1, name: "Carl"},
  //   { id: 2, name: "Peter"}
  // ])

  // filteredUsers = computed(() => this.users().filter(u => u.name.toLowerCase().startsWith(this.search())))

  // logger = effect(() => {
  //   localStorage.setItem('searchString', this.search())
  // })

  // setSearchString(e: Event) {
  //   this.search.set((e.target as HTMLInputElement).value.toLowerCase())
  // }

  // addUser() {
  //   this.users.update(users => [...users, {id: 3, name: "John"}])
  // }

  showCount = false;

  count = signal(0);

  conditionalCount = computed(() => {
    if(this.showCount) {
      return `Count je ${this.count()}`
    } else {
      return 'nic tu neni'
    }
  })

  ngOnInit() {
    setTimeout(() => {
      this.count.set(11);
      this.showCount = true

      console.log(this.count())
    }, 3000);
  }
}
