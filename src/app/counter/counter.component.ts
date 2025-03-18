import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

  count: number = 0;
/*
increment(){
  this.count++;
}

decrement(){
  this.count--;
}

reset(){
  this.count = 0;
}
*/
  counterFunction(type: 'increment' | 'decrement' | 'reset') {
    switch (type) {
      case 'increment':
        this.count++;
        break;
      case 'decrement':
        this.count--;
        break;
      case 'reset':
        this.count = 0;
        break;
    }
  }
}
