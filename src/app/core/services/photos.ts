import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private readonly httpClient = inject(HttpClient)

  getAll() : Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/api/mock');
  }
}
