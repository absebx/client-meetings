//modulos de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//componentes de rutas
import {AppComponent} from './components/app/app.component';
import {MeetingListComponent} from './components/meetings/meeting-list/meeting-list.component';
import {MeetingDetailComponent} from './components/meetings/meeting-detail/meeting-detail.component';

const appRoutes: Routes = [
  {path: '', component: MeetingListComponent},
  {path: 'meeting/:id', component: MeetingDetailComponent},
  {path: '**', component: MeetingListComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

