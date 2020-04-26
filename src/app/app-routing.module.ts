import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PlayerRegistrationComponent  } from './player-registration/player-registration.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { MissionComponent } from './mission/mission.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReportComponent } from './report/report.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', animation: 'home' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services', animation: 'services' }
  },
  {
    path: 'player-registration',
    component: PlayerRegistrationComponent,
    data: { title: 'Player Registration', animation: 'player-registration' }
  },
  {
    path: 'sponsorship',
    component: SponsorshipComponent,
    data: { title: 'Sponsorship', animation: 'sponsorship' }
  },
  {
    path: 'mission',
    component: MissionComponent,
    data: { title: 'Mission', animation: 'mission' }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'Events', animation: 'events' }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: { title: 'registration', animation: 'registration' }
  },
  {
    path: 'report',
    component: ReportComponent,
    data: { title: 'report', animation: 'report' }
  },
  {
    path: '',
    redirectTo: 'mission',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }