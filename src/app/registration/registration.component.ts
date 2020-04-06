import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { IRegistration, ITeamMember, IRentClubs } from '../models/registrationForm';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  constructor(
    private fb: FormBuilder
    , private _http: HttpClient
  ) { }
  needClubsQty = new FormControl('')
  needClubs = new FormControl('');
  registrationType = new FormControl('');
  registrationObject: IRegistration;
  myGroup;
  describe = 'hi';
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  teamMember1 = new FormControl('');
  teamMember2 = new FormControl('');
  teamMember3 = new FormControl('');
  regType: number;
  teamMembersObject: ITeamMember;
  rentClubsObject: IRentClubs;

  ngOnInit() {
    this.myGroup = new FormGroup({

    });
  }
  typeChange() {
    console.log('type change');
    if (this.registrationType.value !== '1') {
      this.teamMember1.setValue('')
      this.teamMember2.setValue('')
      this.teamMember3.setValue('')
      this.needClubs.setValue('')
      this.needClubsQty.setValue('')
    }
  }
  sendRegistration() {

  }
  formHandler() {
    this._http.post('/api/newRegistration', {
      'first': this.firstName.value
      , 'last': this.lastName.value
      , 'email': this.email.value
      , 'registrationType': this.registrationType.value
      , 'teamMember1': this.teamMember1.value
      , 'teamMember2': this.teamMember2.value
      , 'teamMember3': this.teamMember3.value
      , 'needClubs': this.needClubs.value
      , 'needClubsQty': this.needClubsQty.value
    }).subscribe(res => {
      console.log('from database: ', res);
    })
  }
  onSubmit() {
    console.log('submitted');
  }
  showTeamFields(registrationType) {
    if (this.registrationType.value === '1') {
      return 'show'
    }
    else {
      return 'hide'
    }
  }
  showClubsQty() {
    if (this.needClubs.value === 'yes') {
      return 'show'
    }
    else {
      return 'hide'
    }
  }
}
