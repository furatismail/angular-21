import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Settings } from './settings';
import { RouterModule } from '@angular/router';
import { TimeModule } from "../../components/time/time-module";

@NgModule({
  declarations: [Settings],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Settings }]),
    TimeModule.register('2021-01-01')
]
})
export class SettingsModule { }
