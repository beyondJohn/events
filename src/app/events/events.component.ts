import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.countUp(1000);
  }
  starter1 = [274, 4896, 19454, 32056];
  count = [0, 0, 0, 0];
  countUp(speed: number) {
    setTimeout(()=>{
      const max = Math.max(...this.starter1);
      const modulus0 = (Math.round(max / this.starter1[0]) - 1);
      const modulus1 = (Math.round(max / this.starter1[1]) - 1);
      const modulus2 = (Math.round(max / this.starter1[2]) - 1);
  
      for (let i = 0; i <= max; i++) {
        setTimeout(() => {
          if (i % modulus0 === 0) {
            if (this.count[0] < this.starter1[0])
              this.count[0] = this.count[0] + 1;
          }
          if (i % modulus1 === 0) {
            if (this.count[1] < this.starter1[1])
              this.count[1] = this.count[1] + 1;
          }
          if (i % modulus2 === 0) {
            if (this.count[2] < this.starter1[2])
              this.count[2] = this.count[2] + 1;
          }
          this.count[3] = i;
        }, speed);
      }
    },150)
    
  }
}
