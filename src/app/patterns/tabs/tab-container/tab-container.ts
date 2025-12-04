import { Component, computed, contentChildren, effect } from '@angular/core';
import { Tab } from '../tab/tab';

@Component({
  selector: 'app-tab-container',
  imports: [],
  templateUrl: './tab-container.html',
  styleUrl: './tab-container.scss',
})
export class TabContainer {
  tabs = contentChildren(Tab)

  private tabsArray = computed(() => this.tabs())

  private intiitalizeEffect = effect(() => {
    const tabsArray = this.tabsArray();

    if(tabsArray.length === 0) {
      return;
    }
    const activeTabs = tabsArray.filter(tab => tab.active())

    if(activeTabs.length === 0) {
      this.selectTab(tabsArray[0])
    }
  })

  selectTab(tab: Tab) {
    const tabs = this.tabsArray();
    // prochazim vsechny taby a menim na inactive
    tabs.forEach(t => t.active.set(false));
    //ten vybrany davam na active
    tab.active.set(true)
  }
}
