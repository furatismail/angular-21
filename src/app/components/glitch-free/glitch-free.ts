import { Component, effect, EffectRef, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-glitch-free',
  imports: [],
  templateUrl: './glitch-free.html',
  styleUrl: './glitch-free.scss',
})
export class GlitchFree implements OnInit {
  value = signal(5);
  private effectRef!: EffectRef;
  constructor() {
    this.effectRef = effect(() => console.log('----------------value: ', this.value()))
  } 

  ngOnInit() {
    setTimeout(() => {
        this.value.set(11);
        console.log('-----------setTimeout value: ', this.value())
    }, 3000);
  }

  onClick() {
    this.value.set(11)
    this.value.set(1)
    this.value.set(2)
    this.value.set(3)
    this.value.set(4)
    this.value.set(5)
    this.value.set(12)
  }

  onDestroy() {
    this.effectRef.destroy()
  }





///////////////////////////







// import { Component, DoCheck, OnDestroy } from '@angular/core';
// import { BehaviorSubject, Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { AsyncPipe } from '@angular/common';

// @Component({
//   selector: 'app-glitch-free',
//   templateUrl: './glitch-free.html',
//   styleUrl: './glitch-free.scss',
//   imports: [AsyncPipe],
// })
// export class GlitchFree implements DoCheck, OnDestroy {
//   title = 'rxjs-vs-signals';

//   // místo signal(5) použijeme BehaviorSubject
//   value$ = new BehaviorSubject<number>(5);

//   private destroy$ = new Subject<void>();

//   constructor() {
//     // analogy k `effect(() => console.log(this.value(), 'effect'))`
//     this.value$
//       .pipe(takeUntil(this.destroy$))
//       .subscribe((v) => console.log(v, 'effect (rxjs)'));
//   }

//   ngOnInit() {
//     setTimeout(() => {
//       this.value$.next(10);
//       console.log(this.value$.getValue(), 'setTimeout (rxjs)');
//     }, 5000);
//   }

//   ngDoCheck() {
//     console.log(this.value$.getValue(), 'ngDoCheck (rxjs)');
//   }

//   noop() {
//     // TADY JE ROZDÍL:
//     // RxJS subscriber uvidí VŠECHNY tyhle hodnoty:
//     // 11, 9, 8, 7, 11
//     this.value$.next(11);
//     this.value$.next(9);
//     this.value$.next(8);
//     this.value$.next(7);
//     this.value$.next(11);
//   }

//   ngOnDestroy() {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }
// }
}