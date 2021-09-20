import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { QueryService } from './query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  private _subscription: Subscription = new Subscription();

  title = 'IMDB';
  queryControl: FormControl = new FormControl()

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
    this._subscription.add(
      this.queryControl.valueChanges.pipe(
        filter(data => data),
        debounceTime(600),
        distinctUntilChanged()
      ).subscribe((data) => this.queryService.query.next(data)))
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
