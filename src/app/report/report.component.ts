import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface IRegirstration {
  first: string;
  last: string;
  email: string;
  type: number;
  teamMember1: string;
  teamMember2: string;
  teamMember3: string;
  needClubs: boolean;
  needClubsQty: number;

}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  registrations = [];
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('/api/registrations').subscribe(res => {
      this.registrations = res as [];
      console.log('res: ', res);
    })
  }

}
