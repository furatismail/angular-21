import { Component, computed, inject, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { PhotosService } from '../../core/services/photos';

@Component({
  selector: 'app-effect-http',
  imports: [CommonModule],
  templateUrl: './effect-http.html',
  styleUrl: './effect-http.scss'
})
export class EffectHttpComponent {
  
}

