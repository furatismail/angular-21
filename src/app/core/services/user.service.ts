import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpClient = inject(HttpClient)
  
  getAll() : Observable<any>{
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}
