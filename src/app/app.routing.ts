//modulos de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//componentes de rutas
import {AppComponent} from './components/app/app.component';
import {MeetingListComponent} from './components/meetings/meeting-list/meeting-list.component';

const appRoutes: Routes = [
  {path: '', component: MeetingListComponent},
  {path: '**', component: MeetingListComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

