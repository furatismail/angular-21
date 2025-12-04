import { Component, inject, OnInit } from '@angular/core';
import { PhotosService } from '../../../core/services/photos';
import { of } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  photos$ = of([])
  photos: any;
  private route = inject(ActivatedRoute)

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.photos = data?.['photos']
      console.log(this.photos, 'photos')
    })
  }

}
