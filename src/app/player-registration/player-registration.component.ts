import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  register() {
    this.dialog.open(RegistrationComponent);
  }
}
