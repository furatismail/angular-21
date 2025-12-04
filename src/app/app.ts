import { Component } from '@angular/core';
import { TabContainer } from './patterns/tabs/tab-container/tab-container';
import { Tab } from './patterns/tabs/tab/tab';

@Component({
  selector: 'app-root',
  imports: [TabContainer, Tab],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

}
