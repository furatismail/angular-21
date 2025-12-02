import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { TIME_START_DATE } from './time.config';

@Component({
  selector: 'app-time',
  templateUrl: './time.html',
  styleUrl: './time.scss',
  imports: [DatePipe]
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
