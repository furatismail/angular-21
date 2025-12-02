import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TIME_START_DATE } from './time-module';

@Component({
  selector: 'app-time',
  templateUrl: './time.html',
  styleUrl: './time.scss',
  standalone: false
})
export class Time implements OnInit, OnDestroy {
  count!: Date;
  private subscription: Subscription = new Subscription();

  constructor(@Optional() @Inject(TIME_START_DATE) private startDate : string | null) {
    this.count = new Date(this.startDate || new Date());
  }

  ngOnInit(): void {
    this.subscription.add(interval(1000).subscribe(() => {
      this.calculateElapsedTime();
    }));
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe()
  }

  private calculateElapsedTime() {
    this.count = new Date(this.count.getTime() + 1000)
  }
  
}
