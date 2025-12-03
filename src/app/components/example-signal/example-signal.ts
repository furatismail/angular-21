import { NgFor } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-example-signal',
  imports: [NgFor],
  templateUrl: './example-signal.html',
  styleUrl: './example-signal.scss',
})
export class ExampleSignal {
  search = signal('');
  users = signal([
    { id: 1, name: "Carl"},
    { id: 2, name: "Peter"}
  ])

  filteredUsers = computed(() => this.users().filter(u => u.name.toLowerCase().startsWith(this.search())))

  setSearchString(e: Event) {
    this.search.set((e.target as HTMLInputElement).value.toLowerCase())
  }

  addUser() {
    this.users.update(users => [...users, {id: 3, name: "John"}])
  }
}
