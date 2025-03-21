import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();
  count: number = 0;

  constructor() {
    this.counter$.subscribe(value => this.count = value);
   }

  ngOnInit(): void {
  }

  counterFunction(type: 'increment' | 'decrement' | 'reset') {
    switch (type) {
      case 'increment':
        this.counterSubject.next(this.counterSubject.value + 1);
        break;
      case 'decrement':
        this.counterSubject.next(this.counterSubject.value - 1);
        break;
      case 'reset':
        this.counterSubject.next(0);
        break;
    }
  }
}
