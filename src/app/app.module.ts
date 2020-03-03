import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PlayerRegistrationComponent,
    SponsorshipComponent,
    MissionComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , BrowserAnimationsModule
    , HttpClientModule
    , RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
