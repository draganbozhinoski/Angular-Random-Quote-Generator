import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RQuote } from 'src/RQuote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RquoteService {

  constructor(private http:HttpClient) { }

  getQuotes() :Observable<RQuote[]>
  {
      return this.http.get<RQuote[]>('/api/quotes');
  }
}
