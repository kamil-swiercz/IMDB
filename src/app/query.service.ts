import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  query: BehaviorSubject<any> = new BehaviorSubject('a');

  constructor() { }
}
