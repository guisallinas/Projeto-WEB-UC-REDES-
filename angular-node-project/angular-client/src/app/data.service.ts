import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return timer(0, 1000).pipe(
      switchMap(() => this.http.get('http://localhost:3000/api/data')) 
    );
  }
  
}
