import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { MissionComponent } from './mission/mission.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './registration/registration.component';

import {
  MatFormFieldModule, MatInputModule, MatIconModule
  , MatDialogModule, MatCardModule, MatProgressSpinnerModule
  , MatButtonModule, MatSelectModule, MatCheckboxModule
  , MatRadioModule

} from '@angular/material';
import { ReportComponent } from './report/report.component';

const matModules = [
  MatFormFieldModule, MatInputModule, MatIconModule
  , MatDialogModule, MatCardModule, MatProgressSpinnerModule
  , MatButtonModule, MatSelectModule, MatCheckboxModule
  , MatRadioModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PlayerRegistrationComponent,
    SponsorshipComponent,
    MissionComponent,
    EventsComponent,
    RegistrationComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , BrowserAnimationsModule
    , HttpClientModule
    , RouterModule
    , matModules
    , ReactiveFormsModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  , entryComponents:[RegistrationComponent]
})
export class AppModule { }
