import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard {
  decision = true
  weight = 250

  members : any

}
